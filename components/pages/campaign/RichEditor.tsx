import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function RichEditor() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState('<p></p>');

  useEffect(() => {
    setLoaded(true);
  }, []); // run on mounting

  if (loaded) {
    return (
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => {
          // do something when editor's content changed
          setData(editor.getData());
        }}
      />
    );
  } else {
    return <h2> Editor is loading </h2>;
  }
}

export default RichEditor;
