function reversDigits(num)
    {
      // converting number to string
      let str
          = num.toString().split("").reverse().join("");
       

      // converting string to integer
      num = parseInt(str);


      // returning integer
      return str;
  }

// Driver Code
   
  let num = 1234;
  document.write("Reverse of no. is "
                         + reversDigits(num));