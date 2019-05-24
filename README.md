## Build Instructions

#### to update dependencies

_inside project directory_ `/api`

```
npm install
```

_inside_ `/client`

```
npm install
```

###### open two terminal command lines, one inside `/` and one inside `/client`

## IMPORTANT
This project uses absolute paths, append this line to your `.env` file,
```
NODE_PATH=src/
```

## Run Instructions

#### _(step 1)_ start express backend

_inside project directory_ `/api`

```

nodemon index.js

```

or

```

node index.js

```

#### _(step 2)_ start react frontend

_inside_ `/client`

```

npm start

```

A new browser window will open automatically for you

client at [localhost:3000](http://localhost:3000)

server listening on [localhost:5000](http://localhost:5000)

```

```
