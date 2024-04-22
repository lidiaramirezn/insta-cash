import { setupWorker, rest } from 'msw'

export const worker = setupWorker(
  rest.get('/api/campaign', (req, res, ctx) => {
    return res(ctx.json(
      {
        "campaign_name": "InstaCash",
        "min_quota": 1,
        "max_quota": 48,
        "max_amount": 19600,
        "min_amount": 1500,
        "tea": 26.5612,
        "payment_date": "2019-12-26T16:30:04.591Z",
        "currency": "PEN"
      }
    ))
  }),
  rest.get('/api/simulator', (req, res, ctx) => {
    return res(ctx.json(
      {"monthly_amount": 382.5912}
    ))
  })
)

