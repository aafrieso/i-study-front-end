const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/quizzes`

const index = async (): Promise<any> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

async function create(formData: any): Promise<any> {
  const res: Response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  return res.json();
}

export {
  index,
  create
};
