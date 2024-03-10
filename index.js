const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 使用body-parser中间件解析POST请求的JSON数据
app.use(bodyParser.json());

// 聊天机器人逻辑
function chatbot(message) {
  // 在实际应用中，这里需要与NLP引擎交互，分析用户输入并生成相应的响应
  // 这里仅作为示例，简单地返回固定的响应
  if (message.toLowerCase().includes('hello')) {
    return 'Hello! How can I assist you today?';
  } else if (message.toLowerCase().includes('help')) {
    return 'Sure, I can help you with that. What do you need assistance with?';
  } else {
    return 'I'm sorry, I didn't understand that. Could you please rephrase your question?';
  }
}

// 处理用户聊天请求
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;

  // 调用聊天机器人逻辑
  const botResponse = chatbot(userMessage);

  // 返回聊天机器人的响应
  res.json({ message: botResponse });
});

// 启动Express应用程序
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
