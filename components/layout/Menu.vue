<template>
  <ul class="navigation">
    <!-- <li class="current dropdown"> -->
      <li>
      <NuxtLink to="/en">Home</NuxtLink>
      <!-- <ul>
        <li>
          <NuxtLink to="/">Home page 01</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/index-2">Home page 02</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/index-3">Home page 03</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/index-4">Home page 04</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/index-5">Home page 05</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/index-6">Home page 06</NuxtLink>
        </li>
      </ul> -->
    </li>
    <li><NuxtLink to="/en/about">About</NuxtLink></li>
    <li><NuxtLink to="/en/team">Team</NuxtLink></li>
    <li><NuxtLink to="/en/services">Services</NuxtLink></li>
    <li><NuxtLink to="/en/projects">Projects</NuxtLink></li>
    <li><NuxtLink to="/en/news">News</NuxtLink></li>
    <!-- <li class="dropdown">
      <NuxtLink to="#">Pages</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li class="dropdown">
          <NuxtLink to="/">Team</NuxtLink>
          <ul>
            <li>
              <NuxtLink to="/page-team">Team grid</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/page-team-details">Team Details</NuxtLink>
            </li>            
          </ul>
        </li>
      </ul>
    </li> -->
    <!-- <li class="dropdown">
      <NuxtLink to="#">Service</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/page-service">Service grid</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/page-service-details">Service Details</NuxtLink>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">Project</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/page-projects">Project grid</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/page-project-details">Project Details</NuxtLink>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">News</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/news-grid">News Grid</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/news-details">News Details</NuxtLink>
        </li>
      </ul>
    </li> -->
    <li>
      <NuxtLink to="/en/contact">Contact</NuxtLink>
    </li>

    <li class="dropdown">
      <NuxtLink to="/en"><img src="/public/images/resource/pricing-1.png" width="25" /></NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/">Swedish</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/en">English</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/ar">العربية</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>