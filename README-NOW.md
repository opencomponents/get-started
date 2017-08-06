# Starter Kit

Get up and running with OpenComponents in 3 simple steps.

Before starting make sure you have:
- An account on [Now](https://zeit.co/now) and its [CLI installed](https://zeit.co/download#command-line)
- An [S3](https://aws.amazon.com/s3) bucket on AWS

## #1 - Deploy the OpenComponents Registry to Now

Clone this repository locally:

```
$ git clone https://github.com/opencomponents/starter-kit && cd starter-kit
```

Add the needed secrets environment variables with the now CLI:

- `s3-key`
- `s3-secret`
- `s3-region`
- `s3-bucket`
- `publish-username`
- `publish-password`

```
$ now secret s3-key yourvaluehere
...
```

and make them available as environment variables:

```
$ now -e S3_KEY=@s3-key -e S3_SECRET=@s3-secret -e S3_REGION=@s3-region -e S3_BUCKET=@s3-bucket -e PUBLISH_USERNAME=@publish-username -e PUBLISH_PASSWORD=@publish-password
```

For further help with the now CLI, please refere to their [docs](https://zeit.co/docs/features/now-cli)

You are now ready to deploy, simply type:

```
$ now
```

If prompted, choose the Dockerfile deploy


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
$ oc registry add http://my-registryurl.on.now.sh/
```

Publish your component

```
$ oc publish my-first-component --username=YOURVALUEHERE --password=YOURVALUEHERE
```

Your component is now published 🎉 🎉 🎉 !

You can consume it here: `http://my-registryurl.on.now.sh/my-first-component`
