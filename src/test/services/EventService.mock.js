
export const mockEventService = {
  getHackeps: jest.fn().mockResolvedValue({
    start_date: "2021-11-23T08:30:00Z",
    end_date: "2021-11-24T14:00:00Z"
  })
};