jest.mock('cross-fetch', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  }
})
