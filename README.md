# This repo is for practicing Nodejs
 - Node.js is built on top of v8 engine
 - And v8 is written in C++
 - Node uses REPL

# Libuv for Node.js
# Commong EJS and Modern EJS

# By default in CJS it's .js ext file but in MJS(ESM) we have to explicitly write

# Tips
- We can also import all files in a single file and then export it from it

# Notes: 
    - z();	Call function stored in z
    - z()();	Call returned function
    
# Nodejs Working
    - Parsing
    1. Lexical Analysis(Tokenization)
    2. Syntax Analysis(AST)
        - Working of v8 engine
        
# Libuv~ Event Loop
    - Timer -> Poll -> Check -> Close
        - Process.nextTick -> Promise Callbacks

# Note: 
    -  The size of Libuv thread pool is 4 means 4 tasks can run simultaneously. It causes thread pool starvation. File gets delayed.
    - To fix it we have to increase the size of thread pool using UV_THREADPOOL_SIZE=8 node app.js or something same command like this 