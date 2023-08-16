{
  /*
  
  1. border color, style, width
  2. divider color, style, width
  3. outline color, style, width, offset
  4. ring color, style, width, offset
  
  */
}

export const Borders = () => {
  return (
    <div>
      <h1 className="text-center mb-10">BORDERS</h1>

      {/* <div>
        <h2 className="mb-4">Borders</h2>
      </div> */}

      <div className="w-80 mx-auto">
        <h2 className="mb-4">Dividers</h2>
        <div className="grid grid-cols-1">
          <p>Text 1</p>
          <p>Text 2</p>
          <p>Text 3</p>
        </div>
      </div>

       <div>
        <h2 className="mb-4">Offset</h2>
        <span className="inline-block outline-1 outline-green-400 outline-solid outline-offset-4"></span>
      </div>
    </div>
  );
};

export default Borders;
