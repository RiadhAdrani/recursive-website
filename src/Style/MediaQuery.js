export default ({ medium = {}, small = {}, smaller = {}, tiny = {} }) => {
     return [
          { condition: "(max-width:1100px)", ...medium },
          { condition: "(max-width:800px)", ...small },
          { condition: "(max-width:600px)", ...smaller },
          { condition: "(max-width:400px)", ...tiny },
     ];
};
