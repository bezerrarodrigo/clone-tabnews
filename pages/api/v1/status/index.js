function index(request, response) {
  return response.status(200).json({ status: "ok" });
}

export default index;
