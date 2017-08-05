# Starter Kit

Get up and running with OpenComponents in 3 simple steps:

Before starting make sure you have:
- An account on [Heroku](https://signup.heroku.com/)
- An [S3](https://aws.amazon.com/s3) bucket on AWS

## #1 - Deploy the registry to Heroku

Click the button below and follow the instructions.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/opencomponents/starter-kit)

## #2 - Build your first component

Install the OpenComponents CLI

```
$ npm install -g oc
```

Create your first component:

```
$ oc init my-first-component
```

Develop/Test locally by starting a local dev registry

```
$ oc dev . 3030
```

Your component will be available at: 

- endpoint: [http://localhost:3030/my-first-component](http://localhost:3030/my-first-component)

- info: [http://localhost:3030/my-first-component/~info](http://localhost:3030/my-first-component/~info)

- fullPreview: [http://localhost:3030/my-first-component/~preview](http://localhost:3030/my-first-component/~preview)

## #3 Publish the component to the registry

Add the registry to the CLI:

```
$ oc registry add http://my-registry.on.herokuapp.com/
```

Publish your component

```
$ oc publish happiness --username=YOURVALUEHERE --password=YOURVALUEHERE
```

Your component is now published 🎉 🎉 🎉 !

You can consume it here: `http://my-registry.on.herokuapp.com/my-first-component`
