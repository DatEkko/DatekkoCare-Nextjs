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
  
  console.log(data)

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

export {
  getAllOrganArticle, handleCreateArticleAction,
  handleDeleteOrganArticle, handleUpdateArticleAction
}
