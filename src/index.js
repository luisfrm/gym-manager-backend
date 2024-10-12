import { createApp, PORT, connectDB } from "./app.js";

const app = createApp();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
