#

# **SOFTWARE REQUIREMENT SPECIFICATION**

**Food Ordering System**

# **Group 3**

Rahul Chakraborty  
Saptak Manna  
Sneha Datta  
Souvik Mukherjee

#

#

# **Table of Contents** {#table-of-contents}

    [2](#table-of-contents)

[**1\. Introduction 3**](#1.-introduction)

[1.1 Purpose 3](#1.1-purpose)

[1.2 Scope 3](#1.2-scope)

[1.3 Definitions, Acronyms, and Abbreviations 3](#1.3-definitions,-acronyms,-and-abbreviations)

[1.4 References 4](#1.4-references)

[1.5 Overview 4](#1.5-overview)

[**2\. Overall Description 4**](#2.-overall-description)

[2.1 Product Perspective 4](#2.1-product-perspective)

[2.2 Product Features 5](#2.2-product-features)

[2.3 User Classes and Characteristics 6](#2.3-user-classes-and-characteristics)

[2.4 Operating Environment 7](#2.4-operating-environment)

[2.5 Design and Implementation Constraints 8](#2.5-design-and-implementation-constraints)

[2.6 Assumptions and Dependencies 8](#2.6-assumptions-and-dependencies)

[**3\. Specific Requirements 9**](#3.-specific-requirements)

[3.1 Functional Requirements 9](#3.1-functional-requirements)

[3.2 Non-Functional Requirements 35](#3.2-non-functional-requirements)

[**4\. Appendix 39**](#4.-appendix)

#

#

# **1\. Introduction** {#1.-introduction}

## **1.1 Purpose** {#1.1-purpose}

This Software Requirements Specification (SRS) document details the functional and non-functional requirements for the development of a food delivery system. The purpose of this software is to provide a seamless interface between customers, restaurants, delivery partners, and the business management team, enabling the efficient ordering, preparation, and delivery of food.

The intended audience of this document includes software developers, project managers, testers, and stakeholders such as the restaurant and delivery teams, as well as the business and management teams.

---

## **1.2 Scope** {#1.2-scope}

The food delivery app will facilitate an online platform for customers to browse restaurant menus, place food orders, and have those orders delivered by delivery partners. The restaurant teams will handle order fulfillment, while delivery partners will deliver the food to customers. The business team will manage the catalog, monitor business insights, and the management team will manage restaurants and delivery partners. This system will also include support functionality, feedback mechanisms, and order tracking.

Key Features:

-   Customer registration, login, and profile management.
-   Restaurant catalog browsing and order placement.
-   Real-time order tracking and status updates.
-   Restaurant and delivery partner management.
-   Business insights dashboard for the business team.  
    The system will not handle physical delivery logistics or restaurant internal processes beyond order status updates.

---

## **1.3 Definitions, Acronyms, and Abbreviations** {#1.3-definitions,-acronyms,-and-abbreviations}

-   SRS: Software Requirements Specification.
-   GUI: Graphical User Interface.
-   API: Application Programming Interface.
-   Customer: A person who uses the app to order food.
-   Restaurant Team: The entity responsible for preparing the food.
-   Delivery Partner: The entity responsible for delivering the food to the customer.
-   Business Team: Responsible for monitoring business metrics and updating the catalog.
-   Management Team: Handles the management of restaurants and delivery partners.

---

## **1.4 References** {#1.4-references}

-   Use case diagram for the food ordering system (refer to the uploaded diagram).
-   IEEE Standard 830-1998 for Software Requirements Specifications.
-   [https://www.zomato.com](https://www.zomato.com/)
-   [https://www.swiggy.com](https://www.swiggy.com/)

---

## **1.5 Overview** {#1.5-overview}

The rest of this document outlines the system's overall description and the specific functional and non-functional requirements. Section 2 discusses the product's context and high-level functionality. Section 3 defines detailed functional requirements, system attributes, and interface needs.

---

# **2\. Overall Description** {#2.-overall-description}

## **2.1 Product Perspective** {#2.1-product-perspective}

The food delivery system is an independent software system that integrates multiple stakeholders (customers, restaurants, delivery partners, business, and management teams) into a unified platform. It interacts with external payment services for handling transactions but otherwise stands alone. The system allows customers to browse restaurant catalogs, place orders, and track their delivery status. Restaurant teams update the status of orders as they are prepared and dispatched, while delivery partners provide real-time delivery updates. The business and management teams control the content of restaurant listings and view insights into sales and performance.

## This platform is primarily a web and mobile application, with distinct user interfaces for different user roles (e.g., customer, restaurant staff, delivery partner, business/management team).

**Key Interfaces**:

-   Customer Interface: Mobile/web interface for browsing menus, placing orders, and checking delivery status.

-   Restaurant Interface: Mobile/Web interface for updating order status and managing restaurant settings.

-   Delivery Partner Interface: Mobile interface for receiving orders and updating delivery status.

-   Management Dashboard: Web interface for monitoring and managing restaurants/delivery partners.

-   Business Dashboard: Web interface for monitoring business metrics and managing offers and discounts.

---

## **2.2 Product Features** {#2.2-product-features}

-   Customer Features:

    -   Register/Login.

    -   Browse restaurant catalog.

    -   Add/remove items from cart.

    -   Place an order.

    -   View order status in real-time.

    -   Cancel order (before preparation starts).

    -   Provide feedback.

    -   Access Queries.

-   Restaurant Team Features:

    -   Register Restaurant.

    -   Update restaurant menu and catalog.

    -   View pending orders.

    -   Update order status (e.g., preparing, ready for pickup).

    -   Cancel orders if necessary.

    -   Access Queries.

-   Delivery Partner Features:

    -   View and accept delivery assignments.

    -   Update delivery status (e.g., picked up, in transit, delivered).

-   Business Team Features:

    -   View business insights, reports, and sales trends.

    -   Manage offers and discounts.

-   Management Team Features:

    -   Add/remove restaurants from the platform.

    -   Add/remove delivery partners.

    -   Confirm restaurant and delivery partner actions.

---

## **2.3 User Classes and Characteristics** {#2.3-user-classes-and-characteristics}

-   Customers:

    -   Non-technical users who will interact with the system primarily via a mobile or web-based interface.

    -   They need an interface for browsing menus, placing orders, and tracking order status.

-   Restaurant Team:

    -   Restaurant teams can register their restaurant on the platform, given that they get approval from the management team.

    -   Restaurant staff use the system to manage incoming orders and update order statuses.

    -   Expected to have basic technical skills and use the system via an app/web interface.

-   Delivery Partners:

    -   Users who deliver orders and update the order status via a mobile interface.

    -   They are expected to have basic mobile app usage skills.

-   Business Team:

    -   Personnel responsible for monitoring sales, viewing insights, updating restaurant menus and managing discounts and offers.

    -   Use of a web-based dashboard is expected.

-   Management Team:

    -   They are responsible for managing restaurants and delivery partners.

    -   They will interact with advanced features through a web-based management panel.

---

## **2.4 Operating Environment** {#2.4-operating-environment}

-   The system will be accessible on:

    -   Mobile platforms: Android app for customers, delivery partners and restaurant team.

    -   Web browsers: For the restaurant, business, and management teams.

-   Server Environment:

    -   Cloud-hosted, supporting scalability for peak usage.

    -   Integration with external payment gateways for handling transactions.

-   Database:

    -   Cloud-based relational database for storing customer, restaurant, order, and delivery data.

---

## **2.5 Design and Implementation Constraints** {#2.5-design-and-implementation-constraints}

-   Payment Gateway Integration: The system must integrate with third-party payment services securely and efficiently.

-   Security and Privacy: Sensitive user data, such as payment and personal information, must be encrypted and handled in compliance with data privacy laws (e.g., GDPR).

-   Real-time Updates: The system should support real-time notifications for order status changes.

-   Platform Compatibility: The system must work across multiple devices (mobile and web) with consistent performance.

-   Scalability: The platform must be able to handle a high volume of concurrent users during peak hours (e.g., lunch/dinner times) and special occasions(e.g. Festive season).

-   Localization: The app should support multiple languages, depending on the region of operation.

---

## **2.6 Assumptions and Dependencies** {#2.6-assumptions-and-dependencies}

-   **Assumptions**:

    -   Users will have internet access when using the system.

    -   Restaurants will update their menu and item availability regularly to ensure accurate information is displayed to customers.

    -   The payment gateway will be available and operational during transactions.

    -   Restaurant partners are responsible for ensuring that their food handling meets health and safety standards.

-   **Dependencies**:

    -   Payment processing relies on external payment gateways.

    -   Delivery tracking relies on the GPS functionality of delivery partners’ mobile devices.

    -   The performance of the cloud-hosted servers will directly affect the app's scalability and availability.

---

# **3\. Specific Requirements** {#3.-specific-requirements}

## **3.1 Functional Requirements** {#3.1-functional-requirements}

-   **Requirement Id FR-01**: Login Account \[Referencing: Use Case 1\]
    -   Purpose: Registered customers, restaurant team, delivery partners, business team and managing team will be able to use our system by logging in to their registered account.
    -   Actors: Customer, Restaurant Team, Delivery Partner, Business Team, Management Team
    -   Pre Conditions:
        -   The user has already registered an account.
    -   Inputs:

| Input Element | Type    | Optional/ Required | Rules                      |
| ------------- | ------- | ------------------ | -------------------------- |
| Phone Number  | Integer | Required           | No. of digits should be 10 |
| OTP           | Integer | Required           | No. of digits should be 6  |

-   Checks and Responses:
    -   The phone number will be checked for 10 digits; otherwise a pop-up message will be shown for the same.
-   Output:
    -   A pop-up message will be displayed showing “Login Successful”.
-   Post Conditions:
    -   User Activity is recorded in the system log.
    -   The user will be redirected to the Catalog Display Page.

---

-   **Requirement Id FR-02:** Register Account \[Reference: Use Case 1\]
    -   Purpose: New customers, Restaurant Team, Delivery partners, Management team members, Business team members can register an account in the system
    -   Actors: Customer, Restaurant Team, Delivery partner, Management Team, Business team.
    -   Pre-conditions:
        -   Registration page is accessible.
    -   Inputs:

| Input Element | Type    | Optional/Required | Rules                                                                          |
| :------------ | :------ | :---------------- | :----------------------------------------------------------------------------- |
| Name          | Text    | Required          | Less than 300 characters                                                       |
| Phone number  | Numeric | Required          | 10 digits                                                                      |
| Date of Birth | Date    | Required          | Difference between current date and date of birth should be more than 15 years |
| OTP           | Numeric | Required          | 6 digits                                                                       |

-   Checks and Responses:
    -   The credentials are checked for correctness. If there are any abnormalities in the credentials, the user is not allowed to proceed to registration and the registration button is inactive till correct credentials are entered.  
        Additionally a red text marking the incorrect fields is displayed next to the fields.
-   Output:
    -   A pop-up is displayed that the registration is successful.
-   Post Conditions:
    -   The user details are stored in the database.
    -   User is redirected to the Catalog display page.

---

-   **Requirement Id FR-03:** Add item to Cart \[Reference: Use Case 5\]
    -   Purpose: The customer will be able to add items from the catalog to their cart before proceeding to checkout.
    -   Actors: Customer.
    -   Pre-conditions:
        -   The user must be logged in.
        -   The customer must have selected a restaurant and viewed its menu.
        -   The food items must be available (in stock and within the restaurant’s active hours).
    -   Inputs:

| Input Element        | Type    | Optional/Required | Rules                                     |
| :------------------- | :------ | :---------------- | :---------------------------------------- |
| Quantity             | Numeric | Required          | Must be a positive integer(By default 1\) |
| Special Instructions | Text    | Optional          | Must be less than 100 characters.         |

-   Checks and Responses:
    -   The system checks if the selected item is available in stock.
    -   If the item is available, it is added to the cart. If not, the system displays an error message and the user is unable to add the item.
-   Output:
    -   A pop-up message is displayed confirming that the item was successfully added to the cart.
-   Post Conditions:
    -   The item is added to the customer's cart.
    -   The updated cart is displayed for review.

---

-   **Requirement Id FR-04:** Remove item from Cart \[Reference: Use Case 5\]
    -   Purpose: The customer will be able to remove items from their cart or edit the quantity before proceeding to checkout.
    -   Actors: Customer.
    -   Pre-conditions:
        -   The user must be logged in.
        -   The cart must contain at least one item.
    -   Inputs:

| Input Element        | Type    | Optional/Required | Rules                            |
| :------------------- | :------ | :---------------- | :------------------------------- |
| Removal Confirmation | Boolean | Required          | Yes/No button for confirmations. |

-   Checks and Responses:
    -   The system checks if the selected item exists in the customer's cart.
    -   If the item is found, it is removed from the cart. If not, the system displays an error message.
-   Output:
    -   A pop-up message is displayed confirming that the item was successfully removed from the cart.
-   Post Conditions:
    -   The item is removed from the customer's cart.
    -   The updated cart is displayed for review.

---

-   **Requirement Id FR-05:** Add Restaurant \[Reference: Use Case 13\]
    -   Purpose: The Restaurant Team can request to add their restaurant to the system.
    -   Actors: Restaurant team.
    -   Pre-conditions:
        -   The Restaurant team must have a registered account.
        -   The Restaurant team must be logged in before requesting.
    -   Inputs:

| Input Element      | Type    | Optional/Required | Rules                                                 |
| :----------------- | :------ | :---------------- | :---------------------------------------------------- |
| Restaurant name    | Text    | Required          | Not longer than 350 characters                        |
| Address            | Text    | Required          | Should include area/street                            |
| City               | Text    | Required          | Should correspond to the provided pin code.           |
| Pin Code           | Numeric | Required          | Not more than 6 digits                                |
| Landmark           | Text    | Optional          |                                                       |
| Phone Number       | Numeric | Required          | Not more than 10 digits                               |
| FSSAI license copy | File    | Required          | File size less than 3mb. Format should be pdf/png/jpg |
| Pan Card number    | Text    | Required          | Must be alphanumeric                                  |

-   Checks and Responses:
    -   The Pin Code and the City are checked for correspondence.
    -   Phone number is checked for validity.
    -   The Add restaurant button is not activated until all the required fields are filled in.
-   Output:
    -   A pop-up message is displayed confirming that the request to add a restaurant has been generated.
-   Post Conditions:
    -   The Restaurant add request is sent for confirmation.
    -   After authorized by the management team,a notification is sent to register further details.

*   **Requirement Id FR-06:** Remove Restaurant \[Reference: Use Case 13\]
    -   Purpose: The Restaurant team can request to remove their restaurant from the platform.
    -   Actors: Restaurant Team.
    -   Pre-conditions:
        -   The Restaurant team must be logged in.
        -   The Restaurant must be added to the system.
        -   There should be no ongoing customer orders associated with the restaurant at the time of removal.
    -   Inputs:

| Input Element   | Type      | Optional/Required | Rules                                                                                            |
| :-------------- | :-------- | :---------------- | :----------------------------------------------------------------------------------------------- |
| Removal Reason  | Text      | Required          | The reason must not exceed 500 words.                                                            |
| Type of Removal | Selection | Required          | Whether the restaurant requests a temporary deactivation or permanent removal from the platform. |

-   Checks and Responses:
    -   The system checks if the restaurant has any pending or ongoing customer orders. If active orders are found, the system may prevent removal or notify the admin to handle those orders first.
    -   The system prompts the admin to confirm the deletion, ensuring that this is a deliberate action.
-   Output:
    -   A pop-up message is displayed confirming that the removal request has been placed successfully.
    -   Once the restaurant is removed, it will no longer appear in customer search results or on the platform.
-   Post Conditions:
    -   The removal request is sent to the management team who then verify and remove the restaurant from the platform.
    -   The restaurant’s data (e.g., menu items, reviews, ratings) is either deleted or archived, depending on the type of removal.

---

-   **Requirement Id FR-07:** Confirm Restaurant Addition \[Reference: Use Case 14\]
    -   Purpose: The Management team can view the addition requests for restaurants and confirm the addition of a restaurant to the platform.
    -   Actors: Management Team.
    -   Pre-conditions:
        -   The Management team must be logged in.
        -   The Restaurant must have raised a request to be added to the platform
    -   Inputs:

| Input Element        | Type    | Optional/Required | Rules                                     |
| :------------------- | :------ | :---------------- | :---------------------------------------- |
| Require Modification | Boolean | Required          | Should be a yes or no                     |
| Notes and Remarks    | Text    | Optional          | Only required if modification is selected |

-   Checks and Responses:
    -   The system checks if all required fields (as per FR-05) are completed.
    -   The system verifies that the FSSAI license and PAN Card details are valid and correctly formatted.
    -   If any information is incomplete or incorrect, the Management team requests modifications from the restaurant team.
-   Output:
    -   If the restaurant is approved, a notification is sent to the restaurant team confirming the addition.
    -   The restaurant becomes live on the platform, and customers can view the restaurant and place orders.
    -   If modifications are requested, a notification is sent to the restaurant team with the required changes.
-   Post Conditions:
    -   The restaurant's status is updated based on the admin's decision. If approved, the restaurant becomes visible to customers and available for orders. If modifications are requested, the restaurant team must update the details before resubmitting for approval.

---

-   **Requirement Id FR-08:** Confirm Restaurant Removal \[Reference: Use Case 14\]
    -   Purpose: The Management team can review and confirm restaurant removal requests from the platform.
    -   Actors: Management Team.
    -   Pre-conditions:
        -   The Management team must be logged in.
        -   The Restaurant team must have requested the removal of their restaurant from the platform.
    -   Inputs:

| Input Element    | Type    | Optional/Required | Rules                             |
| :--------------- | :------ | :---------------- | :-------------------------------- |
| Removal Decision | Boolean | Required          | Approve or reject                 |
| Rejection Reason | Text    | Optional          | Required if "Reject" is selected. |

-   Checks and Responses:
    -   The system checks if the restaurant removal request was raised by the Restaurant team.
    -   The system verifies that the restaurant is active on the platform and eligible for removal.
    -   If the request is rejected, the system prompts the management team to provide a reason for rejection.
-   Output:
    -   If the removal is approved, the restaurant is removed from the platform, and a notification is sent to the restaurant team confirming the removal.
    -   If the request is rejected, a notification is sent to the restaurant team with the reason for rejection.
-   Post Conditions:
    -   If approved, the restaurant will no longer be visible or available for customers to place orders.
    -   If rejected, the restaurant remains on the platform, and the restaurant team is notified of the decision.

---

-   **Requirement Id FR-09:** Submit Customer Query \[Reference: Use Case 15\]
    -   Purpose: Customers can submit queries regarding payment issues, order problems, and other general inquiries.
    -   Actors: Customer
    -   Pre-conditions:
        -   The customer must be logged in to submit a query.
    -   Inputs:

| Input Element     | Type      | Optional/Required | Rules                                    |
| :---------------- | :-------- | :---------------- | :--------------------------------------- |
| Query category    | Selection | Required          | Options: Payment, Order, General Enquiry |
| Query Description | Text      | Required          | Must not exceed 1000 characters          |
| Order Id          | Text      | Optional          | Required for order-related queries       |

-   Checks and Responses:
    -   The system checks if the query matches an existing FAQ or an already answered query.
    -   If a match is found, an automatic response is sent.
-   Output:
    -   A pop-up confirms that the query has been submitted.
    -   If matched with FAQs or previous queries, an automatic response is provided to the customer.
    -   If the query is new, it is sent to the grievance redressal team for resolution.
-   Post Conditions:
    -   New queries are logged and sent to the grievance redressal team for further action if unresolved.

---

-   **Requirement Id FR-10:** Submit Restaurant Query \[Reference: Use Case 15\]
    -   Purpose: Restaurant teams can submit queries regarding restaurant additions, benefits, and delivery-related issues.
    -   Actors: Restaurant Team
    -   Pre-conditions:
        -   The restaurant team must be logged in to submit a query.
    -   Inputs:

| Input Element     | Type      | Optional/Required | Rules                                    |
| :---------------- | :-------- | :---------------- | :--------------------------------------- |
| Query category    | Selection | Required          | Options: Payment, Order, General Enquiry |
| Query Description | Text      | Required          | Must not exceed 1000 characters          |
| Restaurant Id     | Text      | Optional          | Required for restaurant-specific queries |

-   Checks and Responses:
    -   The system checks for matching FAQs or past answered queries.
    -   If a relevant answer is found, an automatic response is sent.
-   Output:
    -   A confirmation pop-up shows that the query has been submitted.
    -   Automatic responses are provided if applicable.
    -   New queries are forwarded to the grievance redressal team.
-   Post Conditions:
    -   New queries are logged and sent to the grievance redressal team for further action if unresolved.

---

-   **Requirement Id FR-11:** Add Delivery Partner \[Reference: Use Case 16\]
    -   Purpose: The management team can add new delivery partners to the platform by registering their contact details and verifying them through OTP.
    -   Actors: Management Team
    -   Pre-conditions:
        -   The management team must be logged in with the necessary permissions to add a delivery partner.
    -   Inputs:

| Input Element  | Type      | Optional/Required | Rules                                                  |
| :------------- | :-------- | :---------------- | :----------------------------------------------------- |
| Full Name      | Text      | Required          | Not more than 100 characters                           |
| Contact Number | Numeric   | Required          | Must be 10 digits                                      |
| Vehicle Type   | Selection | Required          | Options: Bike, Scooter, etc.                           |
| Service Area   | Text      | Required          | Must specify areas the delivery partner can operate in |
| Availability   | Time      | Required          | Range of time between which available for deliveries.  |
| License copy   | File      | Required          | File format pdf/jpg/png less than 2mb                  |

-   Checks and Responses:
    -   The system sends an OTP to the provided contact number for verification.
    -   The system checks for duplicate contact numbers to prevent multiple registrations.
    -   The system verifies that all required fields are filled in and displays error messages corresponding to the input fields that require correction.
-   Output:
    -   Once all details are provided and the OTP is verified, a confirmation pop-up is displayed indicating that the delivery partner has been added successfully.
    -   A notification is sent to the delivery partner about successful registration.
-   Post Conditions:
    -   The delivery partner’s status is set to "Active" and the profile is added to the platform.

---

-   **Requirement Id FR-12:** Remove Delivery Partner \[Reference: Use Case 16\]
    -   Purpose: The management team can remove a delivery partner from the platform due to performance issues or other reasons.
    -   Actors: Management Team
    -   Pre-conditions:
        -   The delivery partner must be registered and active on the platform.
        -   The Management team must be logged in.
    -   Inputs:

| Input Element       | Type    | Optional/Required | Rules                                                            |
| :------------------ | :------ | :---------------- | :--------------------------------------------------------------- |
| Delivery Partner Id | Text    | Required          | Unique identifier for the delivery partner                       |
| Reason for Removal  | Text    | Required          | A brief description of why the delivery partner is being removed |
| Warnings Given      | Boolean | Optional          | Must indicate if prior warnings were issued                      |

-   Checks and Responses:
    -   The system checks that the delivery partner has received prior warnings if being removed due to performance issues.
    -   The system verifies the delivery partner’s ID and ensures they are registered.
-   Output:
    -   A confirmation pop-up is displayed indicating that the delivery partner has been removed successfully.
    -   A notification is sent to the delivery partner informing them of their removal and the reason.
    -   The delivery partner’s status is set to "Inactive" in the system.
-   Post Conditions:
    -   The delivery partner is no longer visible in the system and cannot accept deliveries.

---

-   **Requirement Id FR-13:** Feedback System\[Reference: Use Case 9 \]
    -   Purpose: The customer can give ratings,reviews and feedback to their received order.The Restaurant Team and Management Team can also see the feedback and rating given by the customer.
    -   Actors: Customer,Restaurant Team, Management Team
    -   Pre-conditions:
        -   The user must have placed and received the order.
    -   Inputs:

| Input Element | Type     | Optional/Required | Rules                                  |
| :------------ | :------- | :---------------- | :------------------------------------- |
| Review        | Text     | Required          | The review must be within 1-150 words. |
| Rating        | Numeric  | Required          | Must be a integer from 0-5             |
| Product Image | jpg/jpeg | Optional          | Size must be within 1MB                |

-   Checks and Responses:
    -   The system checks if the review is within 1-150 words and if the rating is within 5,otherwise a pop-up message is displayed for the same.
    -   The system checks if the image is within 800kB.If it is larger, then a pop-up message is displayed for the same
-   Output:
    -   A pop-up message is displayed confirming that feedback is received successfully.
-   Post Conditions:
    -   The feedback is sent to the restaurant associated with the order and also to the management team.

---

-   **Requirement Id FR-14:** Check Order Status \[ Reference: Use Case 10 \]
    -   Purpose: This requirement is to allow customers to view the current status of an order. This ensures real-time tracking of the order as it progresses through various stages such as "Order Placed," "Preparing," "Ready for Pickup," "Out for Delivery," and "Delivered."
    -   Actors: Customer
    -   Pre-conditions:
        -   The customer has successfully placed an order.
        -   The order must exist in the system and be visible to the relevant actors (customers, restaurant staff, and delivery partners).
        -   Restaurant staff have begun preparing the order, and it has been updated in the system.
    -   Inputs:

| Input Element   | Type | Optional/Required | Rules                                                                                                  |
| :-------------- | :--- | :---------------- | :----------------------------------------------------------------------------------------------------- |
| Order Selection | List | Required          | If more than one order is there,a particular order needs to be selected whose status is to be checked. |

-   Checks and Responses:
    -   If the order is not found or is canceled, show an error message: **“**Order not found or has been canceled.**”**
-   Output:
    -   The current order status (e.g., "Preparing," "Out for Delivery") will be displayed in real-time on the customer's order status page.
-   Post Conditions:
    -   Customers will know the exact status of their orders.
    -   The system will continuously update the status as it changes.

---

-   **Requirement Id FR-15**: Update Order Status \[Reference: Use Case 11\]
    -   Purpose: This allows restaurant teams and delivery partners to update the status of an order. This is essential for keeping customers informed about the progress of their order in real time. It ensures that both the restaurant and the delivery personnel can communicate the current state of the order (e.g., preparing, ready for pickup, out for delivery, delivered) to the customer.
    -   Actors: Customer,Restaurant Team,Delivery Partner
    -   Pre Conditions:
        -   The order must exist, meaning it has been successfully placed by the customer.
        -   The order must be in a state that allows for status updates (e.g., an order that is already delivered or canceled should not allow status changes).
        -   The restaurant team or delivery partner must be logged in and authorized to manage the order.
    -   Inputs:

| Input Element | Type          | Optional/ Required | Rules                                                                                                                |
| ------------- | ------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Status Update | Dropdown Menu | Required           | Includes status like preparing,ready for pickup,out for delivery,delivered, canceled.Only one status can be selected |

-   Checks and Responses:
    -   The system ensures that status updates occur in a logical order. For example, an order cannot be marked as "Delivered" if it hasn't been marked as "Out for Delivery" first.
    -   If an attempt is made to update the order in an illogical sequence (e.g., marking an order as delivered while it's still being prepared), the system displays an error message such as "Invalid status update."
    -   The system checks if the user (restaurant team or delivery partner) has the correct permissions to update the order.
    -   If a user tries to update an order without the right access, an error like "Unauthorized to update this order" will appear.
-   Output:
    -   Once the status is successfully updated, the system sends a notification to the customer about the new order status.
    -   This notification can be displayed via the app and sent through other communication channels (e.g.,SMS).
-   Post Conditions:
    -   The order status is updated in the system.
    -   The updated status is visible to the customer on their "Check Order Status" page.
    -   The customer is kept informed of the order's progress, which improves transparency and user experience.

---

-   **Requirement Id FR-16**: View Pending Orders \[Reference: Use Case 12\]
    -   Purpose: The purpose of this requirement is to allow restaurant staff and delivery partners to view all pending orders assigned to them. For the restaurant, these are orders that have been placed by customers but have not yet been fulfilled. For delivery partners, these are orders that are ready for pickup.
    -   Actors: Restaurant Team,Delivery Partner
    -   Pre Conditions:
        -   The user (restaurant team or delivery partner) must be logged into the system.
        -   Orders must be present in the system, assigned to the specific restaurant or delivery partner.
        -   The restaurant team or delivery partner must be logged in and authorized to manage the order.
    -   Inputs:

| Input Element | Type | Optional/ Required | Rules                                                                            |
| ------------- | ---- | ------------------ | -------------------------------------------------------------------------------- |
| Order Type    | Text | Optional           | Filters orders based on order type for food preparation.Used by restaurant team. |
| Location      | Text | Optional           | Filters orders based on location.Used by delivery team.                          |

-   Checks and Responses:
    -   If no orders are pending for the restaurant, the system will display a message: “No pending orders available at the moment.”
    -   If no delivery orders are pending, the system will display: “No pending deliveries assigned.”
    -   If the user is not logged in or does not have permission to view pending orders, the system will display an error message: “Unauthorized access. Please log in or contact support.”
    -   If a user tries to update an order without the right access, an error like "Unauthorized to update this order" will appear.
-   Output:
    -   A list of all pending customer orders will be displayed on the restaurant dashboard. This includes details such as the order number, items ordered, time of order, and any specific notes.
    -   A list of all pending deliveries assigned to the delivery partner will be shown, including the customer’s address, estimated delivery time, and any special instructions.
-   Post Conditions:
    -   The restaurant staff can start preparing the order, marking it as "in progress" or "ready for pickup" depending on the order stage
    -   The delivery partner will know which orders are ready for pickup or are pending for delivery. Once an order is picked up, it can be updated to "in transit" or "delivered" accordingly.

---

-   **Requirement Id FR-17**: Place Order \[Referencing: Use Case 6\]
    -   Purpose: The customer will be able to place an order for the items in their cart and proceed to payment.
    -   Actors: Customer, Restaurant Team
    -   Pre Conditions:
        -   The user must be logged in.
        -   The cart must contain at least one item.
        -   The user must have a valid payment method configured.
    -   Inputs:

| Input Element    | Type | Optional/ Required | Rules                                   |
| ---------------- | ---- | ------------------ | --------------------------------------- |
| Delivery Address | Text | Required           | Must be a valid address                 |
| Cart Items       | List | Required           | At least one item should be in the cart |

-   Checks and Responses:
    -   The system verifies that all items in the cart are available.
    -   The system checks the validity of the delivery address and the selected payment method.
    -   If any validation fails (e.g., invalid address or insufficient funds), the order cannot be placed, and the user is notified with appropriate messages.
-   Output:
    -   A pop-up message is displayed confirming that the order has been successfully placed.
    -   An order summary is shown with a unique order ID.
-   Post Conditions:
    -   The order is placed and saved in the system.
    -   The restaurant team is notified to prepare the order.
    -   The user is redirected to the complete checkout page.

---

-   **Requirement Id FR-18**: Complete Checkout \[Referencing: Use Case 7\]
    -   Purpose: The customer will be able to complete the checkout process by confirming their order, selecting a payment method, and finalizing the purchase.
    -   Actors: Payment Service
    -   Pre Conditions:
        -   The user must be logged in.
        -   Delivery address and payment details must be provided.
        -   All items in the cart must be available.
    -   Inputs:

| Input Element    | Type      | Optional/ Required | Rules                                                                    |
| ---------------- | --------- | ------------------ | ------------------------------------------------------------------------ |
| Delivery Address | Text      | Required           | Must be a valid address                                                  |
| Payment Method   | Selection | Required           | Must correspond to a valid payment method (e.g., Credit Card, UPI, etc.) |

-   Checks and Responses:
    -   The system verifies that all items in the cart are available.
    -   The system checks if the delivery address is valid and the payment method is accepted.
    -   If the validation is successful, the payment process is initiated.
-   Output:
    -   A confirmation pop-up is displayed showing the order summary, including the total amount.
    -   After successful payment, an order confirmation message is displayed, including the order ID.
    -   A receipt is emailed or shown to the customer.
-   Post Conditions:
    -   Payment is processed, and the transaction details are saved.
    -   The restaurant team is notified to prepare the order, and the delivery partner is informed for dispatch.
    -   The customer is redirected to the order tracking page.
    -   A delivery partner is assigned for the order by the system.

---

-   **Requirement Id FR-19**: Cancel Order \[Referencing: Use Case 8\]
    -   Purpose: The customer will be able to cancel an order that has been placed but not yet processed by the restaurant team.
    -   Actors: Customer, Restaurant Team
    -   Pre Conditions:
        -   The user must be logged in.
        -   The order must have been placed but not yet processed by the restaurant team or dispatched by the delivery partner.
    -   Inputs:

| Input Element          | Type    | Optional/ Required | Rules                                                                  |
| ---------------------- | ------- | ------------------ | ---------------------------------------------------------------------- |
| Order Selection        | List    | Required           | Order List out of which one order which is to be canceled is selected. |
| Canceling Confirmation | Boolean | Required           | Yes/No for confirming cancellation.                                    |
| Cancellation Reason    | Text    | Required           | Reason for canceling the order                                         |

-   Checks and Responses:
    -   The system checks the status of the order.
    -   If the order has not yet been processed by the restaurant or dispatched for delivery, the order can be canceled.
    -   If the order is already being prepared or dispatched, the cancel order button is deactivated.
-   Output:
    -   A pop-up message confirms that the order has been successfully canceled, or an error message is displayed if the cancellation request is denied.
    -   The user receives an email or notification with the cancellation details.
-   Post Conditions:
    -   The order is marked as canceled in the system.
    -   Any applicable refunds are processed (depending on the payment method and order stage).
    -   The customer is redirected to the order history page with the canceled order marked.

---

-   **Requirement Id FR-20**: View Business Insights \[Referencing: Use Case 17\]
    -   Purpose: This requirement allows business team members to access comprehensive reports on business performance. By providing insights into sales data, order metrics, and delivery efficiency, the feature helps drive informed decision-making and strategic planning. It also highlights top-performing restaurants and menu items, enabling targeted promotions and improvements.
    -   Actors: Business Team
    -   Pre Conditions:
        -   The business team member must be logged in with appropriate access rights.
        -   Data must be collected and stored from customer interactions, orders, feedback, and other relevant activities.
    -   Inputs:

| Input Element      | Type      | Optional/ Required | Rules                                              |
| ------------------ | --------- | ------------------ | -------------------------------------------------- |
| Date Range         | Date      | Optional           | Defaults to last 30 days, customizable date range. |
| Data Export format | Selection | Required           | Option to export data in CSV or PDF formats.       |

-   Checks and Responses:
    -   Authentication Check: Ensure the user has business-level access rights before displaying the dashboard.
    -   Date Range Validation: Verify the selected date range is valid (e.g., no future dates).
    -   Metric Selection Validation: Ensure the selected metrics are valid and available.
    -   Response Time: Ensure data is fetched and displayed within a reasonable time frame.
    -   Error Handling: If no data is available for the selected period, display a message (e.g., "No data available for the selected period.").
-   Output:
    -   A dashboard with visualizations (graphs, tables, charts) of selected business metrics based on the provided input filters.
    -   Option to download reports in CSV or PDF formats.
    -   Insights and recommendations (if available) based on data trends (e.g., a suggestion to boost marketing if sales are down).
    -   Reports can be exported in various formats (e.g., CSV, PDF) for further analysis.
-   Post Conditions:
    -   The business team gains insights into the system’s performance, helping them make informed decisions regarding business operations.
    -   Data can be exported for further analysis or presentation purposes.

---

-   **Requirement Id FR-21**: Update Account \[Referencing: Use Case 2\]
    -   Purpose: The customer, restaurant team, delivery partner, business team and management team will be able to update their account information, such as personal details, contact information, or payment methods.
    -   Actors: Customer, Restaurant Team, Delivery Partner, Business Team, Management Team
    -   Pre Conditions:
        -   The user must be logged in.
        -   The user must have a valid account in the system.
    -   Inputs:

| Input Element | Type    | Optional/ Required | Rules                            |
| ------------- | ------- | ------------------ | -------------------------------- |
| Name          | Text    | Optional           | Must be less than 300 characters |
| Email         | Text    | Optional           | Must be in a valid email format  |
| Phone Number  | Numeric | Optional           | Must be exactly 10 digits        |

-   Checks and Responses:
    -   The system checks the validity of the updated information.
    -   If any required fields are missing or incorrect (e.g., invalid phone number or email), an error message is displayed next to the relevant field.
    -   If the update is successful, a confirmation message is shown.
-   Output:
    -   A pop-up message confirms that the account information has been successfully updated.
-   Post Conditions:
    -   The updated information is saved in the system.
    -   The customer or user is redirected to their account profile page, where they can review the updated details.

---

-   **Requirement Id FR-22:** Delete Account \[Reference: Use Case 2\]
    -   Purpose: The customer, restaurant team, delivery partner, business team and management team will be able to permanently delete their account from the system, including all associated data.
    -   Actors: Customer, Restaurant Team, Delivery partner, Management Team, Business team.
    -   Pre-conditions:
        -   The user must be logged in.
        -   The account must exist and be active.
    -   Inputs:

| Input Element    | Type    | Optional/Required | Rules                                   |
| :--------------- | :------ | :---------------- | :-------------------------------------- |
| Account Password | Text    | Required          | Must match the current account password |
| Confirmation     | Boolean | Required          | User must confirm account deletion      |

-   Checks and Responses:
    -   The system verifies the account password for security purposes.
    -   The system checks if there are any ongoing orders or transactions that need to be resolved before deletion.
    -   If the password is incorrect or there are unresolved issues, an error message is displayed and the account is not deleted.
    -   If all checks are passed, a confirmation prompt is shown to ensure the user intends to delete the account permanently.
-   Output:
    -   A confirmation message is displayed informing the user that the account has been successfully deleted.
    -   An email or notification is sent to the user confirming the deletion.
-   Post Conditions:
    -   The account and all associated data (order history, saved addresses, payment methods, etc.) are permanently deleted from the system.
    -   The user is logged out and redirected to the homepage or sign-up page.

---

-   **Requirement Id FR-23:** Browse Catalog \[Reference: Use Case 3\]
    -   Purpose: The customer will be able to browse the list of available restaurants and view the menu of each restaurant.
    -   Actors: Customer
    -   Pre-conditions:
        -   The user must be logged in (optional, depending on system design).
        -   Restaurants and their respective menus must be available in the system.
    -   Inputs:

| Input Element   | Type    | Optional/Required | Rules                                                      |
| :-------------- | :------ | :---------------- | :--------------------------------------------------------- |
| Restaurant Name | Text    | Optional          | Can be used to filter restaurants based on name            |
| Cuisine Type    | Text    | Optional          | Can filter restaurants by cuisine (e.g., Italian, Chinese) |
| Location        | Text    | Optional          | Filters restaurants by proximity or delivery area          |
| Price Range     | Numeric | Optional          | Allows filtering by price range of menu items              |

-   Checks and Responses:The system checks if the user’s location or delivery area matches the restaurant’s delivery zone.
    -   If no restaurants or menus are available, a message is displayed indicating that no options are currently available.
-   Output:
    -   A list of restaurants is displayed, along with their names, ratings, cuisine types, and availability for delivery.
    -   Upon selecting a restaurant, the full menu is displayed with prices and descriptions of each item.
    -   Users can click on individual menu items to add them to the cart (handled by the "Add to Cart" use case).
-   Post Conditions:
    -   The user can browse through restaurant menus and add items to their cart.
    -   If the user selects a restaurant that is currently closed, a message is displayed indicating its operating hours.

---

-   **Requirement Id FR-24:** Update Catalog \[Reference: Use Case 4\]
    -   Purpose: The restaurant team will be able to update the catalog, including adding, modifying, or removing menu items from their restaurant’s menu.
    -   Actors: Restaurant Team
    -   Pre-conditions:
        -   The restaurant team must be logged in with appropriate permissions to update their menu.
        -   The restaurant must be registered in the system.
    -   Inputs:

| Input Element    | Type    | Optional/Required | Rules                                                  |
| :--------------- | :------ | :---------------- | :----------------------------------------------------- |
| Item Name        | Text    | Required          | Must be less than 100 characters                       |
| Item Description | Text    | Optional          | Must be less than 300 characters                       |
| Item Price       | Numeric | Required          | Must be a positive value                               |
| Item Image       | File    | Optional          | Must be a valid image file (JPEG, PNG, etc.)           |
| Availability     | Boolean | Required          | Indicates whether the item is available or unavailable |

-   Checks and Responses:
    -   The system validates the input data (e.g., correct pricing format, proper image file type).
    -   If no restaurants or menus are available, a message is displayed indicating that no options are currently available.
-   Output:
    -   A success message confirms that the catalog has been updated.
    -   The updated menu is displayed on both the restaurant’s and customers’ views of the catalog.
-   Post Conditions:
    -   The restaurant’s updated menu is saved in the system.
    -   Customers browsing the catalog will see the updated items, descriptions, and availability status.

---

##

## **3.2 Non-Functional Requirements** {#3.2-non-functional-requirements}

-   **Requirement Id NFR-01**
    -   Category: Performance
    -   Description: The system must handle up to 10,000 concurrent users during peak hours (e.g., lunch/dinner hours) and festive seasons.
    -   Rationale: To ensure that the system can handle high demand without crashing or slowing down, ensuring smooth user experience during peak usage periods.
    -   Acceptance Criteria: Conduct a load test where 10,000 virtual users attempt to access the app simultaneously. The system should respond without noticeable lag or failure.
    -   Priority: High

---

-   **Requirement Id NFR-02**
    -   Category: Usability
    -   Description: The user interface (UI) must be intuitive and allow customers to place an order within 3 minutes from login.
    -   Rationale: A user-friendly interface improves customer satisfaction and retention, reducing the time required for placing an order.
    -   Acceptance Criteria: Conduct usability testing where participants are asked to place an order. Measure the time taken to complete the task. 90% of users should complete the task in under 3 minutes.
    -   Priority: High

---

-   **Requirement Id NFR-03**
    -   Category: Reliability
    -   Description: The system must maintain a 95% uptime over a 12-month period.
    -   Rationale: Ensuring that the app is available and operational for users at all times is critical for a food delivery service.
    -   Acceptance Criteria: Monitor uptime with tracking software over a period of 12 months. The system must not exceed 43.8 hours of downtime in a year.
    -   Priority: High

---

-   **Requirement Id NFR-04**
    -   Category: Security
    -   Description: All user data, including payment details, must be encrypted using SHA-256 encryption standards.
    -   Rationale: Ensures compliance with data protection laws and keeps sensitive user information secure from unauthorized access.
    -   Acceptance Criteria: Perform a security audit to verify that sensitive data is encrypted and that no data breaches have occurred during testing.
    -   Priority: High

---

-   **Requirement Id NFR-05**
    -   Category: Scalability
    -   Description: The system should support horizontal scaling to accommodate increased user load during promotions or peak seasons.
    -   Rationale: Ensures that the system can handle spikes in traffic by adding resources rather than compromising performance.
    -   Acceptance Criteria: Simulate a scenario where traffic spikes 10x the average load. The system should automatically scale up without downtime.
    -   Priority: Medium

---

-   **Requirement Id NFR-06**
    -   Category: Availability
    -   Description: The system should recover from server failures or unexpected crashes within 5 minutes.
    -   Rationale: Ensures minimal disruption to service and better user experience, even during technical issues.
    -   Acceptance Criteria: Conduct failover testing by manually shutting down servers and measuring the time taken to restore the system.
    -   Priority: High

---

-   **Requirement Id NFR-07**
    -   Category: Maintainability
    -   Description: The codebase must be modular, allowing updates or bug fixes to be deployed without affecting the entire system.
    -   Rationale: Reduces downtime and allows the system to be updated or patched without large-scale disruptions.
    -   Acceptance Criteria: Test the deployment of a new feature or patch. The system should remain operational during deployment, with no impact on existing features.
    -   Priority: Medium

---

-   **Requirement Id NFR-08**
    -   Category: Portability
    -   Description: The app should function on Android platforms, providing the same core features and user experience.
    -   Rationale: Supports a broader audience by ensuring compatibility with the most commonly used mobile operating systems.
    -   Acceptance Criteria: Conduct testing on multiple devices (Android ) to verify that the app works as expected, without any platform-specific issues.
    -   Priority: High

---

-   **Requirement Id NFR-09**
    -   Category: Data Backup and Recovery
    -   Description: Data should be backed up every 24 hours, with recovery times not exceeding 30 minutes.
    -   Rationale: Ensures business continuity and protects against data loss in the event of system failures or cyber-attacks.
    -   Acceptance Criteria: Test data recovery procedures and verify that the system can be restored from the last backup within 30 minutes.
    -   Priority: Medium

---

-   **Requirement Id NFR-10**
    -   Category: Accessibility
    -   Description: The system must adhere to WCAG 2.1 (Web Content Accessibility Guidelines) standards, ensuring it is accessible to users with disabilities.
    -   Rationale: Increases the inclusivity of the app, making it usable for a wider range of customers, including those with visual or motor impairments.
    -   Acceptance Criteria: Conduct accessibility testing with users who rely on screen readers and other assistive technologies to confirm compliance with WCAG 2.1 standards.
    -   Priority: Medium

---

-   **Requirement Id NFR-11**
    -   Category: Legal and Regulatory Compliance
    -   Description: The system must comply with GDPR regarding user data privacy.
    -   Rationale: Ensures legal compliance and avoids potential penalties for mishandling personal data.
    -   Acceptance Criteria: Conduct a data privacy audit and confirm that the system meets all relevant GDPR requirements, including opt-in/opt-out options and data erasure upon request.
    -   Priority: High

---

#

# **4\. Appendix** {#4.-appendix}

-   **Appendix-A(Use Case Diagram)**

# **![][image1]**

#

[image1]: data:image/png;base64,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
