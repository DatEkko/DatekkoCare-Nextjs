"use server"; // Chạy trên server

const URL = "http://localhost:6677/api/v1"

const getAllOrganArticle = async (page?: number, limit?: number) => {
  if (page && limit) {
    const res = await fetch(URL + `/read?page=${page}&limit=${limit}`, {
      method: "GET",
    });

    return await res.json();
  }
  const res = await fetch(URL + `/read`, {
    method: "GET",
  });

  return await res.json();
}

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
  if (page && limit) {
    const res = await fetch(URL + `/disease-read?page=${page}&limit=${limit}`, {
      method: "GET"
    });

    return await res.json();
  }
  const res = await fetch(URL + `/disease-read`, {
    method: "GET",
  });

  return await res.json();
}

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
  const res = await fetch(URL + `/getServiceById/${id}`, {
    method: "GET",
  });

  return await res.json();
}

const getKoiProjectService = async () => {
  const res = await fetch(URL + `/koi-read`, {
    method: "GET",
  });

  return await res.json();
}

const getMaintainProjectService = async () => {
  const res = await fetch(URL + `/maintain-read`, {
    method: "GET",
  });

  return await res.json();
}

const getDesignProjectService = async () => {
  const res = await fetch(URL + `/design-read`, {
    method: "GET",
  });

  return await res.json();
}

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
  getProductByIdAction, getReleatedProductAction
}
