export const apiFetch = async (url, ...params) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/${url}`,
      ...params,
    );

    return res.json();
  } catch (error) {
    console.error("error:", error);
  }
};
