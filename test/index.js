const should = require('should')
const { BittrexClient } = require('../')
const client = new BittrexClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET
})

describe('bittrex-node', () => {
  describe('public', () => {
    it('should get markets', async () => {
      let results = await client.markets()
      should.exist(results)
      results.length.should.be.above(0)
    })

    it('should get currencies', async () => {
      let results = await client.currencies()
      should.exist(results)
      results.length.should.be.above(0)
    })

    it('should get ticker', async () => {
      let { Bid, Ask, Last } = await client.ticker('BTC-XLM')
      should.exist(Bid)
      should.exist(Ask)
      should.exist(Last)
      Bid.should.be.above(0)
      Ask.should.be.above(0)
      Last.should.be.above(0)
    })

    it('should get market summaries', async () => {
      let results = await client.marketSummaries()
      should.exist(results)
      results.length.should.be.above(0)
    })

    it('should get market summary', async () => {
      let results = await client.marketSummary('BTC-XLM')
      should.exist(results)
      results.length.should.equal(1)
    })

    it('should get market history', async () => {
      let results = await client.marketHistory('BTC-XLM')
      should.exist(results)
      results.length.should.be.above(0)
    })

    it('should get order book', async () => {
      let { buy, sell } = await client.orderBook('BTC-XLM')
      should.exist(buy)
      should.exist(sell)
      buy.length.should.be.above(0)
      sell.length.should.be.above(0)
    })
  })

  describe('market', () => {
    it('should get open orders', async () => {
      let results = await client.openOrders('BTC-XLM')
      should.exist(results)
      results.length.should.be.aboveOrEqual(0)
    })
  })

  describe('account', () => {
    it('should get balances', async () => {
      let results = await client.balances()
      should.exist(results)
      results.length.should.be.aboveOrEqual(0)
    })

    it('should get balance', async () => {
      let { Balance } = await client.balance('BTC')
      should.exist(Balance)
      Balance.should.be.aboveOrEqual(0)
    })

    it('should get deposit address', async () => {
      let { Address } = await client.depositAddress('BTC')
      should.exist(Address)
    })

    it('should get order history', async () => {
      let results = await client.orderHistory('BTC-XLM')
      should.exist(results)
      results.length.should.be.aboveOrEqual(0)
    })

    it('should get withdrawl history', async () => {
      let results = await client.withdrawalHistory('BTC')
      should.exist(results)
      results.length.should.be.aboveOrEqual(0)
    })

    it('should get deposit history', async () => {
      let results = await client.depositHistory('BTC')
      should.exist(results)
      results.length.should.be.aboveOrEqual(0)
    })
  })
})
