# Zetkin Foundation website
New website for Zetkin Foundation, backed by Strapi CMS and built on NEXT.js.

## Development

### Use dummy data
By default the CMS uses SQLite to store data. There is a database file with
dummy data included in the repository, that you can copy to the CMS data
directory in `cms/.tmp`:

```
mkdir cms/.tmp
cp dev/dummydata.db cms/.tmp/data.db
```

### Run services (with Docker)
NOTE: If you prefer not to use Docker, skip to the next section.

If you have [Docker](https://docker.com) installed, you can run the development
environment in containers to make sure you are using the expected versions of
all dependencies, including Node, yarn etc.

```
docker-compose up
```

### Run services (without Docker)
You may need Node v14a (as recommended by Strapi) and yarn classic (<2.0.0) for
services to run smoothly on your machine. If you have problems, we recommend
trying Docker.

Run the Strapi CMS like this:

```
cd cms
yarn install
yarn develop
```

Run the NEXT.js frontend like this:

```
cd frontend
yarn install
yarn dev
```

### CMS login
The CMS runs by default at http://localhost:1337/admin. If you are using the
default dummy data, there is already a user account that you can login with:

* E-mail `admin@example.com`
* Password `Clara1857`
