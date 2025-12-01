<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Aditya</title>
    <link rel="stylesheet" href="../src/css/admin_style.css">
</head>
<body>
    <div class="admin-container">
        <!-- Sidebar Navigation -->
        <div class="admin-sidebar">
            <div class="sidebar-header">
                <h2>Admin</h2>
            </div>
            <ul>
                <li><a href="#dashboard" class="active">Dashboard</a></li>
                <li><a href="#users">Users</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#messages">Messages</a></li>
                <li><a href="#settings">Settings</a></li>
                <li><a href="form.php">Logout</a></li>
            </ul>
        </div>

        <!-- Main Content Area -->
        <div class="admin-main">
            <!-- Admin Header -->
            <div class="admin-header">
                <h1>Dashboard</h1>
                <button class="logout-btn">Logout</button>
            </div>

            <!-- Dashboard Alert -->
            <div class="alert alert-success">
                Welcome back, Admin! Your session is active.
            </div>

            <!-- Dashboard Cards -->
            <div class="dashboard-cards">
                <div class="card">
                    <div class="card-icon">📊</div>
                    <h3>Total Users</h3>
                    <div class="card-value">1,245</div>
                    <div class="card-subtitle">+15% this month</div>
                </div>

                <div class="card">
                    <div class="card-icon">🖼️</div>
                    <h3>Portfolio Items</h3>
                    <div class="card-value">42</div>
                    <div class="card-subtitle">Latest: 2 days ago</div>
                </div>

                <div class="card">
                    <div class="card-icon">📸</div>
                    <h3>Gallery Images</h3>
                    <div class="card-value">156</div>
                    <div class="card-subtitle">+8 new images</div>
                </div>

                <div class="card">
                    <div class="card-icon">💬</div>
                    <h3>Messages</h3>
                    <div class="card-value">28</div>
                    <div class="card-subtitle">5 unread</div>
                </div>
            </div>

            <!-- Users Table Section -->
            <h2 style="margin-bottom: 20px; color: #2c3e50;">Recent Users</h2>
            <div class="admin-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Join Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#001</td>
                            <td>John Doe</td>
                            <td>john@example.com</td>
                            <td>2025-11-15</td>
                            <td><span style="color: #27ae60; font-weight: bold;">Active</span></td>
                            <td>
                                <button class="btn btn-primary">Edit</button>
                                <button class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#002</td>
                            <td>Jane Smith</td>
                            <td>jane@example.com</td>
                            <td>2025-10-20</td>
                            <td><span style="color: #27ae60; font-weight: bold;">Active</span></td>
                            <td>
                                <button class="btn btn-primary">Edit</button>
                                <button class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#003</td>
                            <td>Mike Johnson</td>
                            <td>mike@example.com</td>
                            <td>2025-09-05</td>
                            <td><span style="color: #e74c3c; font-weight: bold;">Inactive</span></td>
                            <td>
                                <button class="btn btn-primary">Edit</button>
                                <button class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#004</td>
                            <td>Sarah Williams</td>
                            <td>sarah@example.com</td>
                            <td>2025-12-01</td>
                            <td><span style="color: #27ae60; font-weight: bold;">Active</span></td>
                            <td>
                                <button class="btn btn-primary">Edit</button>
                                <button class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Add New User Form (Hidden by default, can be toggled) -->
            <h2 style="margin-top: 40px; margin-bottom: 20px; color: #2c3e50;">Add New User</h2>
            <form class="admin-form" method="POST" action="">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter full name" required>
                </div>

                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter email address" required>
                </div>

                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter phone number">
                </div>

                <div class="form-group">
                    <label for="role">Role</label>
                    <select id="role" name="role" required>
                        <option value="">-- Select Role --</option>
                        <option value="user">User</option>
                        <option value="moderator">Moderator</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="notes">Notes</label>
                    <textarea id="notes" name="notes" placeholder="Add any additional notes..."></textarea>
                </div>

                <button type="submit" class="btn btn-success">Add User</button>
                <button type="reset" class="btn btn-warning">Clear Form</button>
            </form>
        </div>
    </div>
</body>
</html>
