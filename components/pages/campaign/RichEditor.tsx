import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

type Props = {
  text: string;
  onChange: (str: string) => void;
};

const RichEditor: React.FC<Props> = ({ text, onChange }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []); // run on mounting

  if (loaded) {
    return (
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          // do something when editor's content changed
          onChange(editor.getData());
        }}
      />
    );
  } else {
    return <h2> Editor is loading </h2>;
  }
};

export default RichEditor;
