# **Assignment: Case Study on Proxy Design Pattern**  
**Time Limit:** 2 Hours  
**Complexity Level:** Moderate

## **Scenario: AI-Powered Auto-Moderation Proxy for Live Chat**  

### **Background:**  
You are developing a **live chat platform** for an online gaming community. The chat allows players to **communicate in real time**. However, there is a growing issue of:  
- **Toxic language** (offensive words, harassment).  
- **Spam messages** (bots flooding chat).  
- **Inappropriate content** (violating platform guidelines).  

To maintain a **safe and engaging** chat experience, you need an **Auto-Moderation Proxy** that filters messages **before they reach the chat room**.  

---

## **Task:**  
### **Step 1: Implement Proxy Pattern**  
- Define an interface **(`IChatService`)** with a method `sendMessage(user: string, message: string)`.  
- Implement a **real chat service (`RealChatService`)** that sends messages directly to the chat room.  
- Create a **Chat Proxy (`ChatModerationProxy`)** that:  
  - **Filters inappropriate content** using AI-based text moderation.  
  - **Blocks spam messages** by checking message frequency.  
  - **Replaces offensive words** with asterisks (`****`).  
  - **Logs moderated messages** for admin review.  

### **Step 2: Simulate Chat System Usage**  
- Implement different **user behaviors**:  
  - A **normal user** sending safe messages.  
  - A **toxic user** using offensive words (should be censored).  
  - A **spam bot** sending multiple messages in a short time (should be blocked).  
- Ensure that only **clean and non-spam messages** are passed to the **real chat service**.  