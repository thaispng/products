import api from "./api"; // Importa a instância do axios

// Função para obter dados de um produto
export const getProduct = async (id: string) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    throw new Error("Falha ao buscar produto");
  }
};

// Função para atualizar dados de um produto
export const updateProduct = async (
  id: string,
  updatedData: { [key: string]: string | number | boolean }
) => {
  try {
    const response = await api.put(`/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    throw new Error("Falha ao atualizar produto");
  }
};

// Função para obter lista de produtos
export const getProductList = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar lista de produtos:", error);
    throw new Error("Falha ao buscar lista de produtos");
  }
};

interface ProductData {
  name: string;
  unitMeasure: string;
  amount: number;
  price: number;
  perishable: boolean;
  expirationDate: string;
  dateManufacture: string;
}

export const createProduct = async (productData: ProductData) => {
  try {
    const response = await api.post("/", productData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    throw new Error("Falha ao criar produto");
  }
};

// Função para obter lista paginada de produtos
export const getProductPageList = async (page: number, elements: number) => {
  try {
    const response = await api.get(`/page/${page}/${elements}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar lista paginada de produtos:", error);
    throw new Error("Falha ao buscar lista paginada de produtos");
  }
};
