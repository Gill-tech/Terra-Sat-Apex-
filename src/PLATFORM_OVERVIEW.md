# TerraSat Climate Intelligence Platform

## Overview
TerraSat is a comprehensive climate risk intelligence platform providing satellite-driven early warning for floods and droughts across East Africa. The platform serves multiple stakeholder types with role-specific dashboards and intelligence.

## Landing Page Features

### Navigation
- TerraSat logo and branding
- How It Works
- Impact
- Who We Serve
- Sign In (modal dialog)
- Get Started (registration with role selection)

### Hero Section
- Satellite view background of Africa at night
- Key metrics: 90% Faster Claims, 8 Countries, 28hr Early Warning
- **"Explore Data"** button opens interactive map viewer showing:
  - Flood risk maps with satellite imagery
  - Drought risk maps with satellite imagery
  - Active alerts by county
  - Real-time data updates

### How It Works - Intelligence Flywheel
Three-layer system:
1. **Satellite Monitoring** - All-weather coverage with Sentinel-1/2
2. **AI Risk Engine** - Self-improving predictions
3. **Ground-Truth Sensors** - Real-time verification

### Impact Section
- Measurable outcomes for all stakeholders
- Coverage stats: 8 countries, 24/7 monitoring
- Impact by role: Underwriters, Claims Teams, Disaster Managers, Communities

### Who We Serve
Five primary user roles with specific features highlighted

### Footer
- Platform links
- Solutions overview
- Contact information
- Copyright 2026

## Authentication System

### Get Started (Registration)
Form fields:
- Full Name
- Company
- Email
- Password
- Role Selection (radio buttons)

### Available Roles
1. **Insurance Underwriter** - Flood and drought risk scoring at quote
2. **Claims Adjuster** - Satellite-verified claims resolution
3. **Disaster Manager** - Early warning and alert management
4. **Reinsurer / CAT Analyst** - Portfolio exposure and catastrophe monitoring
5. **Loan Manager (Bank)** - Climate risk for lending decisions

## Dashboard Features

### Common Elements (All Roles)
- Left Sidebar: Administrative boundaries, controls, data pipeline access
- Center Map: Interactive OpenStreetMap with satellite overlays
- Top Header: Hazard type selection (Flood/Drought), time range controls
- Footer: Data sources, update time, confidence metrics

### Role-Specific Right Panels

#### Insurance Underwriter Panel
- Real-time risk scoring (0-10 scale)
- Risk level assessment (High/Medium/Low)
- Key underwriting factors
- Premium rate recommendations
- Quick quote generation
- Export risk reports

#### Claims Adjuster Panel
- Satellite impact analysis
- Active claims tracking
- Verification status
- Affected area measurements
- Water coverage percentages
- Change detection metrics
- Impact map generation

#### Disaster Manager Panel (Default)
- Risk assessments
- Alert system controls
- SMS/USSD distribution
- Language selection (English/Kiswahili)
- County-level targeting
- Community notifications

#### Reinsurer / CAT Analyst Panel
- Portfolio exposure tracking
- Total portfolio value
- Exposed value percentage
- Active catastrophic events
- Loss estimation (best/likely/worst case)
- Expected claims metrics
- CAT report generation

#### Loan Manager Panel
- Climate risk scoring for locations
- Risk factor analysis (flood/drought exposure)
- Portfolio exposure metrics
- Lending recommendations
- Loan-to-value (LTV) suggestions
- Risk premium calculations
- Climate insurance requirements

## Technical Architecture

### Data Sources
- Sentinel-1 (SAR - flood detection)
- Sentinel-2 (MSI - drought monitoring)
- ERA5 (climate reanalysis)
- Copernicus emergency data
- OpenStreetMap (base layers)
- Ground-truth IoT sensors

### Geographic Coverage
- Kenya (47 counties, 290 sub-counties, 1,450 wards)
- 8 countries across East Africa
- Full IGAD regional network coverage

### Key Metrics
- 90% reduction in field visits
- 80% faster claims processing
- 28+ hours advance warning
- 92% data confidence level
- 24/7 continuous monitoring

## Design Principles

### Color Palette
- Primary: #D4E89E (lime green)
- Background: #1A3A3A (dark teal)
- Accent: #0F2727 (darker teal)
- Text: White and gray variations

### Design Philosophy
- Minimalistic and professional
- Satellite imagery integration
- Clean typography
- Clear visual hierarchy
- Interactive elements with subtle animations
- Accessible color contrasts

## User Flows

### New User Registration
1. Click "Get Started" in navigation
2. Fill in personal details (name, company, email, password)
3. Select role from 5 options
4. Submit form
5. Automatically logged in and redirected to role-specific dashboard

### Existing User Login
1. Click "Sign In" in navigation
2. Enter email and password
3. Submit
4. Redirected to role-specific dashboard based on stored role

### Data Exploration (No Login Required)
1. Click "Explore Data" in hero section
2. View interactive satellite maps
3. Toggle between Flood and Drought views
4. Click on regions to see risk details
5. View active alerts and affected populations

## Future Enhancements
- Multi-language support (full Kiswahili translation)
- Mobile app integration
- Advanced analytics and reporting
- API access for enterprise clients
- Custom alert thresholds
- Integration with insurance platforms
- Automated parametric insurance triggers
