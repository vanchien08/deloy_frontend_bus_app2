import axios from "../axios";

export const searchTripsByProvinces = async (fromProvinceId, toProvinceId,date,ticketCount) => {
  try {
    const response = await axios.get(`/api/search`, {
      params: {
        fromProvinceId,
        toProvinceId,
        date,
        ticketCount,
      },
    });
    return response; 
  } catch (error) {
    throw new Error("Lỗi khi tìm kiếm chuyến xe");
  }
};