import React, { useRef, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ value, onChange, placeholder }) => {
  const quillRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Handle initial setup and value updates
  useEffect(() => {
    if (!quillRef.current) return;

    const editor = quillRef.current.getEditor?.();
    if (!editor) return;

    // Set flag to indicate editor is ready
    setIsReady(true);
  }, []);

  // Update content whenever value changes
  useEffect(() => {
    if (!quillRef.current || !isReady) return;

    const editor = quillRef.current.getEditor?.();
    if (!editor) return;

    try {
      // Get current content from editor
      const currentHtml = editor.root.innerHTML;
      
      // Only update if content has actually changed
      if (value && currentHtml !== value) {
        // Directly set the HTML content
        editor.root.innerHTML = value;
      }
    } catch (e) {
      console.warn('Failed to update editor content:', e);
    }
  }, [value, isReady]);

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      onChange={(content, delta, source, editor) => {
        onChange(editor.root.innerHTML);
      }}
      placeholder={placeholder}
      className="bg-white rounded border"
      defaultValue=""
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean']
        ]
      }}
    />
  );
};

export default RichTextEditor;
