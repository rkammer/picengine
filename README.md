# picengine
Image Generator

## Compile
```
    tsc -p .\tsconfig.json
```

## run
```
    node .\bin\app.js
```

## post compile
run the following to copy assets into ./bin
```
    mkdir ./bin/assets
    cp -r ./src/assets/* ./bin/assets
```