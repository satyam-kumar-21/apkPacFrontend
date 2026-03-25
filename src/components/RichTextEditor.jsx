import React, { useEffect, useRef, useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ value, onChange, placeholder }) => {
  const quillRef = useRef(null);

  // Handle HTML content properly when component loads
  useEffect(() => {
    if (quillRef.current && value) {
      const editor = quillRef.current.getEditor();
      // Clear and set new HTML content
      editor.root.innerHTML = value;
    }
  }, []); // Only on initial mount

  const handleChange = useCallback((content, delta, source) => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      // Get the HTML content from the editor
      const html = editor.root.innerHTML;
      onChange(html);
    }
  }, [onChange]);

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      onChange={handleChange}
      placeholder={placeholder}
      className="bg-white rounded border"
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
