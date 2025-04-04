"use server"; // Chạy trên server

const URL = "http://localhost:6677/api/v1";
const API_URL = "http://localhost:6677/api/v1";

const getAllOrganArticle = async (page?: number, limit?: number) => {
  const url = page && limit
    ? `${API_URL}/read?page=${page}&limit=${limit}`
    : `${API_URL}/read`;
  try {
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) throw new Error("API không phản hồi");
    return await res.json();
  } catch (error) {
    console.error("Lỗi trong getAllOrganArticle:", error instanceof Error ? error.message : error);
    return { EC: -1, DT: [] }; // Fallback
  }
};

const handleCreateArticleAction = async (data: any) => {
  const res = await fetch(URL + "/create", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await res.json();
}

const handleDeleteOrganArticle = async (data: any) => {
  const res = await fetch(URL + "/delete", {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await res.json();
}

const handleUpdateArticleAction = async (data: any) => {
  const res = await fetch(URL + "/update", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  return await res.json();
}

const getAllDiseaseArticle = async (page?: number, limit?: number) => {
  const url = page && limit
    ? `${API_URL}/disease-read?page=${page}&limit=${limit}`
    : `${API_URL}/disease-read`;
  try {
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) throw new Error("API không phản hồi");
    return await res.json();
  } catch (error) {
    console.error("Lỗi trong getAllDiseaseArticle:", error instanceof Error ? error.message : error);
    return { EC: -1, DT: { article: [] } }; // Fallback khi lỗi
  }
};

const handleCreateDiseaseArticleAction = async (data: any) => {
  const res = await fetch(URL + "/disease-create", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await res.json();
}

const handleDeleteDiseaseArticle = async (data: any) => {
  const res = await fetch(URL + "/disease-delete", {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await res.json();
}

const handleUpdateDiseaseArticleAction = async (data: any) => {
  const res = await fetch(URL + "/disease-update", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  return await res.json();
}

const getAllTreatmentArticle = async (page?: number, limit?: number) => {
  if (page && limit) {
    const res = await fetch(URL + `/treatment-read?page=${page}&limit=${limit}`, {
      method: "GET",
    });

    return await res.json();
  }

  const res = await fetch(URL + `/treatment-read`, {
    method: "GET",
  });

  return await res.json();
}

const handleCreateTreatmentAction = async (data: any) => {
  const res = await fetch(URL + "/treatment-create", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await res.json();
}

const handleDeleteTreatmentArticle = async (data: any) => {
  const res = await fetch(URL + "/treatment-delete", {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await res.json();
}

const handleUpdateTreatmentArticleAction = async (data: any) => {
  const res = await fetch(URL + "/treatment-update", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  return await res.json();
}

const getServiceByIdService = async (id: number) => {
  try {
    const res = await fetch(`${API_URL}/getServiceById/${id}`, {
      method: "GET",
    });
    if (!res.ok) throw new Error("API không phản hồi");
    return await res.json();
  } catch (error) {
    console.error("Lỗi trong getServiceByIdService:", error instanceof Error ? error.message : error);
    return { EC: -1, DT: {} }; // Fallback khi lỗi
  }
};

const getKoiProjectService = async () => {
  try {
    const res = await fetch(`${API_URL}/koi-read`, { method: "GET" });
    if (!res.ok) throw new Error("API không phản hồi");
    return await res.json();
  } catch (error) {
    console.error("Lỗi trong getKoiProjectService:", error instanceof Error ? error.message : error);
    return { EC: -1, DT: [] }; // Fallback khi lỗi
  }
};

const getMaintainProjectService = async () => {
  try {
    const res = await fetch(`${API_URL}/maintain-read`, { method: "GET" });
    if (!res.ok) throw new Error("API không phản hồi");
    return await res.json();
  } catch (error) {
    console.error("Lỗi trong getMaintainProjectService:", error instanceof Error ? error.message : error);
    return { EC: -1, DT: [] }; // Fallback khi lỗi
  }
};

const getDesignProjectService = async () => {
  try {
    const res = await fetch(`${API_URL}/design-read`, { method: "GET" });
    if (!res.ok) throw new Error("API không phản hồi");
    return await res.json();
  } catch (error) {
    console.error("Lỗi trong getDesignProjectService:", error instanceof Error ? error.message : error);
    return { EC: -1, DT: [] }; // Fallback khi lỗi
  }
};

const getProductService = async (page?: number, limit?: number) => {
  if (page && limit) {
    const res = await fetch(URL + `/product-read?page=${page}&limit=${limit}`, {
      method: "GET",
    });

    return await res.json();
  }
  const res = await fetch(URL + `/product-read`, {
    method: "GET",
  });

  return await res.json();
}

const getAllCodeProjectService = async () => {
  const res = await fetch(URL + `/allcode-project-read`, {
    method: "GET",
  });

  return await res.json();
}

////////////////////////Product API
const getAllCodeProductService = async () => {
  const res = await fetch(URL + `/allcode-product-read`, {
    method: "GET",
  });

  return await res.json();
}

const getAllCodeConditionService = async () => {
  const res = await fetch(URL + `/allcode-condition-read`, {
    method: "GET",
  });

  return await res.json();
}

const handleCreateProductAction = async (data: any) => {
  const res = await fetch(URL + "/product-create", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await res.json();
}

const handleDeleteProductArticle = async (data: any) => {
  const res = await fetch(URL + "/product-delete", {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return await res.json();
}

const handleUpdateProductAction = async (data: any) => {
  const res = await fetch(URL + "/product-update", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  return await res.json();
}

const getProductListByIdAction = async (id: string) => {
  const res = await fetch(URL + `/product-read/${id}`, {
    method: "GET",
  });

  return await res.json();
}

const getProductByIdAction = async (id: string) => {
  const res = await fetch(URL + `/detail-product/${id}`, {
    method: "GET",
  });

  return await res.json();
}

const getReleatedProductAction = async (data: any) => {
  const res = await fetch(URL + `/related-product`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  return await res.json();
}

const getProductShowCaseByIdAction = async (id: string, limit: string) => {
  const res = await fetch(URL + `/product-showcase?id=${id}&limit=${limit}`, {
    method: "GET",
  });

  return await res.json();
}

const getRandomProductAction = async (limit: string) => {
  const res = await fetch(URL + `/random-product?limit=${limit}`, {
    method: "GET",
  });

  return await res.json();
}

export {
  getAllOrganArticle, handleCreateArticleAction,
  handleDeleteOrganArticle, handleUpdateArticleAction,
  getAllDiseaseArticle, handleCreateDiseaseArticleAction,
  handleDeleteDiseaseArticle, handleUpdateDiseaseArticleAction,
  getAllTreatmentArticle, handleCreateTreatmentAction,
  handleDeleteTreatmentArticle, handleUpdateTreatmentArticleAction,
  getServiceByIdService, getAllCodeProjectService, getKoiProjectService,
  getMaintainProjectService, getDesignProjectService, getProductService,
  getAllCodeProductService, getAllCodeConditionService, handleCreateProductAction,
  handleDeleteProductArticle, handleUpdateProductAction, getProductListByIdAction,
  getProductByIdAction, getReleatedProductAction, getProductShowCaseByIdAction,
  getRandomProductAction
}
