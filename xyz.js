function x(){
    const a=10;
    function b(){
        console.log("b");
    }

        function c(){
        console.log("c");
    }

    console.log(a);
    
    // return b,c       //only c will be called
    return {a,b,c}
}

const z=x()

z.a
z.b()

z.c()



// Note: function (exports, require, module, _filename, __dirname)
