---
layout: default
modal-id: 1
title: Botrista
short-caption: Botrista
date: 2023-12-1
img: botrista.gif
project-date: 2023-12-1
category: Computer Vision, Inverse Kinematics
github: https://github.com/JihaiZhao/Robot_arm
description: 
<br><h4><strong>Overview</strong></h4><p style="text-align:left;">A collection of ROS2 packages to drive the Emika Franka robot arm to brew a cup of pour over coffee.</p><ul><li><h5 style="text-align:left;">Nodes</h5></li><ul><li><p style="text-align:left;">botrista Package<span>:</span></p></li><ul><li><p style="text-align:left;">camera_localizer<span>:</span> localizes the d435 and d405 cameras and publishes transforms for april tags seen by the cameras from the robot base</p></li><li><p style="text-align:left;">coffee_grounds<span>:</span> controls the actions for picking up and dumping the coffee scoop</p></li><li><p style="text-align:left;">cup_detection<span>:</span> handles detection of the coffee cup in the cup holder and triggers the rest of the routine. also publishes a transform to the top of the coffee cup</p></li><li><p style="text-align:left;">delay_node<span>:</span> handles the delay service which is used to pause the robot for a specified time at certain points in the routine</p></li><li><p style="text-align:left;">grasp_node<span>:</span> offers the grasp_process action, which is used to grap the "standard" handle used for the kettle, pot, and filter</p></li><li><p style="text-align:left;">handle_detector<span>:</span> tracks the blue and green tape on the handles of the objects using the d405 camera and publishes a tf for the object handle</p></li><li><p style="text-align:left;">kettle<span>:</span> handles action for picking up, pouring, and placing the kettle</p></li><li><p style="text-align:left;">pick_filter<span>:</span> offers the action to pick up the coffee filter</p></li><li><p style="text-align:left;">pot<span>:</span> handles action for picking up, pouring, and placing the coffee pot</p></li><li><p style="text-align:left;">pouring<span>:</span> offers the pour action, which is used by the kettle to create spiral motions</p></li><li><p style="text-align:left;">run_botrista<span>:</span> the main node which offers the make_coffee action</p></li></ul><li><p style="text-align:left;">botrista Package<span>:</span></p></li>
<ul><li><p style="text-align:left;">grasp_planner<span>:</span> handles planning and execution of grasp actions</p></li><li><p style="text-align:left;">moveitapi<span>:</span> a wrapper class for sending moveit commands to a robot like the Franka</p></li></ul></ul></ul>
# ## Nodes:
# ### botrista Package:
# - camera_localizer: localizes the d435 and d405 cameras and publishes transforms for april tags seen by the cameras from the robot base
# - coffee_grounds: controls the actions for picking up and dumping the coffee scoop
# - cup_detection: handles detection of the coffee cup in the cup holder and triggers the rest of the routine. also publishes a transform to the top of the coffee cup
# - delay_node: handles the delay service which is used to pause the robot for a specified time at certain points in the routine
# - grasp_node: offers the grasp_process action, which is used to grap the "standard" handle used for the kettle, pot, and filter
# - handle_detector: tracks the blue and green tape on the handles of the objects using the d405 camera and publishes a tf for the object handle
# - kettle: handles action for picking up, pouring, and placing the kettle
# - pick_filter: offers the action to pick up the coffee filter
# - pot: handles action for picking up, pouring, and placing the coffee pot
# - pouring: offers the pour action, which is used by the kettle to create spiral motions
# - run_botrista: the main node which offers the make_coffee action
# ### moveit_wrapper package
# - grasp_planner: handles planning and execution of grasp actions
# - moveitapi: a wrapper class for sending moveit commands to a robot like the Franka
---
