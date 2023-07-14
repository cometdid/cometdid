# 开发记录




## 构建消息

```shell
######## 一下这些无需重复执行
# 创建链
ignite scaffold chain cometdid --no-module --address-prefix did

# 创建模型
ignite scaffold  module did -y
# 组织  
ignite scaffold  list orgs name logo desc --module did -y

# 授权消息
ignite s message oauth orgId:uint name avator --module did

# 查询验证  did
ignite s query  validDid did --module did
ignite s query  did orgId:uint creator --module did



##### 每次运行都要用。
# 运行链
ignite chain serve  --home ./dist/.did -v -f


## 创建组织
cometdidd --home ./dist/.did tx did create-orgs testorg testorg.png "testorg desc" --from bob -y 
cometdidd --home ./dist/.did tx did create-orgs testorg1 testorg1.png "testorg desc" --from bob -y 
## 显示组织列表
cometdidd --home ./dist/.did  query did list-orgs

## 授权生成 did 
cometdidd --home ./dist/.did  tx did oauth 1  nickname avator.png --from bob -y
# 查询 DID
cometdidd --home ./dist/.did  query did  did 1 did13lfkfvslurdzaaflvwnnx6wsxkya4g06kft6q0
# did:cometdid:1:bob-address  
# nickname  avator.png
# ether did
# did:cometdid:0000000000000001:did13lfkfvslurdzaaflvwnnx6wsxkya4g06kft6q0
cometdidd --home ./dist/.did  query did  valid-did did:cometdid:0000000000000001:did13lfkfvslurdzaaflvwnnx6wsxkya4g06kft6q0

# 转账给 pi
cometdidd  --home ./dist/.did   tx bank send  did13lfkfvslurdzaaflvwnnx6wsxkya4g06kft6q0 did140um02k4h2pqjn3saqetz57k2xfxsl95zc5a4z  10000000token
```




## 生成前端
```shell
# 生成前端代码
ignite s vue -y
# 生成  vue  相关代码
ignite g composables -y
ignite g vuex -y

# 运行
VITE_ADDRESS_PREFIX=did npm run dev
```








# cometdid
**cometdid** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Ignite CLI has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/username/cometdid@latest! | sudo bash
```
`username/cometdid` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
