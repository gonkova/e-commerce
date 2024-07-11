interface StoreGetProductsParams {
    min_price: number;
    max_price: number;
    limit?: number;
    order?: string;
    sales_channel_id?: string[];
    include_category_children?: boolean;
    expand?: string;
    // Добавете други необходими полета според документацията на Medusa
  }
  
  import { getProductsList } from "@lib/data";


  export const getFilteredProducts = async (
    minPrice: number,
    maxPrice: number,
    countryCode: string
  ) => {
    try {
      const queryParams: StoreGetProductsParams = {
        min_price: minPrice,
        max_price: maxPrice,
        limit: 50,
        order: '-created_at',
        sales_channel_id: ['channel1', 'channel2'],
        include_category_children: true,
        expand: 'variants',
        // Добавете други параметри според вашите изисквания
      };
  
      // Извикване на функцията getProductsList с queryParams и countryCode
      const { response } = await getProductsList({
        queryParams,
        countryCode,
      });
  
      return response.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // или обработете грешката според вашите нужди
    }
  };
  