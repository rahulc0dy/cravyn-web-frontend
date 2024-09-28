#

# **SOFTWARE REQUIREMENT SPECIFICATION**

**Food Ordering System**

#

#

# **Table of Contents**

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

# **1\. Introduction**

## **1.1 Purpose**

This Software Requirements Specification (SRS) document details the functional and non-functional requirements for the development of a food delivery system. The purpose of this software is to provide a seamless interface between customers, restaurants, delivery partners, and the business management team, enabling the efficient ordering, preparation, and delivery of food.

The intended audience of this document includes software developers, project managers, testers, and stakeholders such as the restaurant and delivery teams, as well as the business and management teams.

---

## **1.2 Scope**

The food delivery app will facilitate an online platform for customers to browse restaurant menus, place food orders, and have those orders delivered by delivery partners. The restaurant teams will handle order fulfillment, while delivery partners will deliver the food to customers. The business team will manage the catalog, monitor business insights, and the management team will manage restaurants and delivery partners. This system will also include support functionality, feedback mechanisms, and order tracking.

Key Features:

-   Customer registration, login, and profile management.
-   Restaurant catalog browsing and order placement.
-   Real-time order tracking and status updates.
-   Restaurant and delivery partner management.
-   Business insights dashboard for the business team.  
    The system will not handle physical delivery logistics or restaurant internal processes beyond order status updates.

---

## **1.3 Definitions, Acronyms, and Abbreviations**

-   SRS: Software Requirements Specification.
-   GUI: Graphical User Interface.
-   API: Application Programming Interface.
-   Customer: A person who uses the app to order food.
-   Restaurant Team: The entity responsible for preparing the food.
-   Delivery Partner: The entity responsible for delivering the food to the customer.
-   Business Team: Responsible for monitoring business metrics and updating the catalog.
-   Management Team: Handles the management of restaurants and delivery partners.

---

## **1.4 References**

-   Use case diagram for the food ordering system (refer to the uploaded diagram).
-   IEEE Standard 830-1998 for Software Requirements Specifications.
-   [https://www.zomato.com](https://www.zomato.com/)
-   [https://www.swiggy.com](https://www.swiggy.com/)

---

## **1.5 Overview**

The rest of this document outlines the system's overall description and the specific functional and non-functional requirements. Section 2 discusses the product's context and high-level functionality. Section 3 defines detailed functional requirements, system attributes, and interface needs.

---

# **2\. Overall Description**

## **2.1 Product Perspective**

The food delivery system is an independent software system that integrates multiple stakeholders (customers, restaurants, delivery partners, business, and management teams) into a unified platform. It interacts with external payment services for handling transactions but otherwise stands alone. The system allows customers to browse restaurant catalogs, place orders, and track their delivery status. Restaurant teams update the status of orders as they are prepared and dispatched, while delivery partners provide real-time delivery updates. The business and management teams control the content of restaurant listings and view insights into sales and performance.

## This platform is primarily a web and mobile application, with distinct user interfaces for different user roles (e.g., customer, restaurant staff, delivery partner, business/management team).

**Key Interfaces**:

-   Customer Interface: Mobile/web interface for browsing menus, placing orders, and checking delivery status.

-   Restaurant Interface: Mobile/Web interface for updating order status and managing restaurant settings.

-   Delivery Partner Interface: Mobile interface for receiving orders and updating delivery status.

-   Management Dashboard: Web interface for monitoring and managing restaurants/delivery partners.

-   Business Dashboard: Web interface for monitoring business metrics and managing offers and discounts.

---

## **2.2 Product Features**

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

## **2.3 User Classes and Characteristics**

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

## **2.4 Operating Environment**

-   The system will be accessible on:

    -   Mobile platforms: Android app for customers, delivery partners and restaurant team.

    -   Web browsers: For the restaurant, business, and management teams.

-   Server Environment:

    -   Cloud-hosted, supporting scalability for peak usage.

    -   Integration with external payment gateways for handling transactions.

-   Database:

    -   Cloud-based relational database for storing customer, restaurant, order, and delivery data.

---

## **2.5 Design and Implementation Constraints**

-   Payment Gateway Integration: The system must integrate with third-party payment services securely and efficiently.

-   Security and Privacy: Sensitive user data, such as payment and personal information, must be encrypted and handled in compliance with data privacy laws (e.g., GDPR).

-   Real-time Updates: The system should support real-time notifications for order status changes.

-   Platform Compatibility: The system must work across multiple devices (mobile and web) with consistent performance.

-   Scalability: The platform must be able to handle a high volume of concurrent users during peak hours (e.g., lunch/dinner times) and special occasions(e.g. Festive season).

-   Localization: The app should support multiple languages, depending on the region of operation.

---

## **2.6 Assumptions and Dependencies**

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

# **3\. Specific Requirements**

## **3.1 Functional Requirements**

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

## **3.2 Non-Functional Requirements**

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
