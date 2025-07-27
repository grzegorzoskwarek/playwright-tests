# Key Requirements for EventBugAI Application

1. **Unique User Registration**
   - Users must register with a unique identifier and username. Duplicate IDs or usernames are not allowed.

2. **Event Creation and Management**
   - Users can create events with a title (3-50 characters), description (10-200 characters), location (3-50 characters), and a future date. Events can be categorized with up to 3 categories (max 20 characters each).

3. **Authentication and Security**
   - All authenticated endpoints require a valid JWT token. Passwords must meet minimum length requirements. Users can only modify their own profile and events.

4. **Event Participation and Invitations**
   - Users can join public events without invitation and be invited to private events. Event creators cannot leave their own events.

5. **User and Platform Statistics**
   - The system tracks user engagement metrics, event participation rates, and category popularity. Statistics are maintained for both individual users and the overall platform.
