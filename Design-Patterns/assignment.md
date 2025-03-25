# **Assignment: Case Study on Singleton Pattern**  

## **Scenario: Centralized Notification System**  
You are working as a **TypeScript developer** for a company that builds **real-time collaborative applications**, such as a **project management tool** similar to Trello or Asana.  

To improve the user experience, the application has a **notification system** that alerts users when:  
- A task is **assigned** to them.  
- A team member **comments** on their task.  
- A deadline is **approaching**.  

Since multiple modules in the app (task board, chat, dashboard, etc.) need access to notifications, your team has decided to **implement a Singleton-based Notification Manager** that will:  
1. **Ensure notifications are managed centrally** across different modules.  
2. **Store notifications in memory** and prevent duplicate alerts.  
3. **Allow any part of the application to fetch notifications** efficiently.  

---

## **Task:**  
### **Step 1: Implement Singleton Pattern**  
Create a **TypeScript class** using the Singleton pattern that:  
- Stores notifications in an **array**.  
- Provides a method to **add new notifications**.  
- Provides a method to **retrieve all notifications**.  
- Ensures that **only one instance** of the notification manager exists.  

### **Step 2: Simulate Application Usage**  
- Simulate an application where **different modules (e.g., Task Manager, Chat, Dashboard)** add notifications.  
- Ensure all modules access the **same notification instance** and see the same notifications.  