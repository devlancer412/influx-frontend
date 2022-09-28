import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { RichTextEditorProps } from 'react-rte';
//import the component
const RichTextEditor = dynamic<RichTextEditorProps>(() => import('react-rte'), {
  ssr: false,
});

const NoteEditor = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    const importModule = async () => {
      //import module on the client-side to get `createEmptyValue` instead of a component
      const module = await import('react-rte');
      setValue(module.createEmptyValue());
    };
    importModule();
  }, []);

  const handleOnChange = (value) => {
    setValue(value);
  };

  return (
    <div className=''>
      <RichTextEditor value={value} onChange={handleOnChange} />
    </div>
  );
};

export default NoteEditor;
