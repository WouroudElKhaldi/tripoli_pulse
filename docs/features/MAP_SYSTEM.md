# TRIPOLI PULSE AI
# MAP SYSTEM SPECIFICATION
# VERSION 1.0

---

# PURPOSE

The Map System is one of the core pillars of Tripoli Pulse AI.

It transforms reports, analytics, predictions, and recommendations into an interactive geographical experience.

The map acts as:

- A city monitoring system
- A geospatial intelligence platform
- A citizen engagement tool
- A municipality operations center
- The foundation of the future Digital Twin

---

# GOALS

Enable citizens to:

- Explore city issues
- Discover nearby reports
- Report issues directly from the map
- Monitor neighborhood conditions
- Understand city improvements

Enable municipalities to:

- Monitor city conditions in real-time
- Prioritize interventions geographically
- Analyze spatial patterns
- Detect hotspots
- Visualize predictions

---

# MAP STACK

Frontend:

- MapLibre GL JS
- OpenStreetMap
- React Native Maps (Mobile)

Backend:

- PostgreSQL
- PostGIS

---

# CORE MAP FEATURES

## Interactive Map

Capabilities:

- Zoom
- Pan
- Rotate
- Tilt
- Fullscreen
- Locate Me

---

## Markers

Display:

- Reports
- Campaigns
- Municipality Projects
- Predictions
- Points of Interest

---

## Clustering

Purpose:

Group nearby markers.

Benefits:

- Better performance
- Cleaner UI
- Easier navigation

---

## Layers

Map should support independent layers.

Users can toggle:

- Reports
- Heatmaps
- Neighborhood Boundaries
- Campaigns
- Predictions
- Municipality Projects
- Accessibility Layer
- Environmental Layer

---

# CITIZEN MAP FEATURES

---

## Report Markers

Display:

Issue Type
Status
Severity

---

## Nearby Reports

Display reports around user's location.

Purpose:

Prevent duplicate reports.

---

## Create Report From Map

Flow:

Tap
↓

Select Location
↓

Create Report

---

## Search

Search by:

Address
Street
Neighborhood
Landmark

---

## Filters

Status

Category

Severity

Distance

Date Range

Neighborhood

---

## Report Details Modal

Display:

Images
Description
Status
Timeline
AI Summary
Municipality Updates

---

# MUNICIPALITY MAP FEATURES

---

## City Operations Map

Display:

All reports
Projects
Predictions
Campaigns
Boundaries

---

## Advanced Filters

Issue Type

Severity

Status

Date Range

Assigned Team

Neighborhood

Resolution Time

---

## Selection Tools

Single Select

Multi Select

Box Selection

Polygon Selection

---

## Bulk Actions

Assign Team

Change Status

Export Reports

Generate Analytics

---

# HEATMAPS

Purpose:

Visualize issue concentration.

Heatmaps:

- Potholes
- Waste
- Flooding
- Lighting Issues
- Accessibility Problems

---

# HOTSPOT DETECTION

Purpose:

Automatically identify problematic areas.

Methods:

Density Analysis
Spatial Clustering

Outputs:

Risk Zones
Priority Zones
Recommended Interventions

---

# NEIGHBORHOOD BOUNDARIES

Display:

Districts
Zones
Sub-neighborhoods

Each neighborhood should display:

Infrastructure Score
Accessibility Score
Engagement Score
Environmental Score

---

# NEIGHBORHOOD SCORE CARD

Example:

```txt
Mina

Infrastructure: 82
Environment: 88
Accessibility: 76
Engagement: 91
Overall Score: 84
```

---

# ACCESSIBILITY LAYER

Display:

Wheelchair obstacles
Broken sidewalks
Unsafe crossings
Accessibility reports

Purpose:

Improve inclusivity.

---

# ENVIRONMENTAL LAYER

Display:

Trees
Green spaces
Waste accumulation
Pollution reports
Flood-prone areas

---

# PREDICTION LAYER

Display:

Predicted:

- Flood risks
- Traffic congestion
- Waste accumulation
- Infrastructure deterioration

Color scale:

Green
Yellow
Orange
Red

---

# CAMPAIGNS LAYER

Display:

Community initiatives.

Examples:

Clean Mina Week
Tree Planting Events
Road Safety Campaigns

---

# MUNICIPAL PROJECTS LAYER

Display:

Road repairs
Infrastructure projects
Maintenance operations
Construction projects

---

# DIGITAL TWIN FOUNDATION

The map system should be designed so it can evolve into a Digital Twin.

Future capabilities:

3D Buildings
Infrastructure Simulation
Traffic Simulation
Environmental Simulation
City Scenario Modeling

MVP implementation remains fully 2D.

---

# MOBILE MAP PAGES

---

## Explore Map

Features:

- Interactive map
- Search
- Filters
- Layers
- Locate Me

---

## Nearby Reports

Features:

- Report markers
- Report cards
- Distances
- Directions

---

## Create Report

Features:

- Long press map
- Place marker
- Submit report

---

## Neighborhood Details

Features:

Scores
Statistics
Recent Reports
Campaigns
Recommendations

---

# DASHBOARD MAP PAGES

---

## Operations Center

Features:

Live reports
Layers
Filters
Bulk actions

---

## Heatmap Center

Features:

Density maps
Time filters
Analytics

---

## Prediction Center

Features:

Risk zones
Forecast layers
Recommendations

---

## Neighborhood Analytics

Features:

Scores
Comparisons
Historical trends

---

# GEOSPATIAL FEATURES

---

## Nearby Search

Examples:

Reports within 500 meters.

---

## Radius Search

Examples:

All potholes within 2km.

---

## Polygon Search

Examples:

Reports inside Mina district.

---

## Distance Calculations

Examples:

Distance between reports and schools.

---

## Spatial Aggregations

Examples:

Issue counts per neighborhood.

---

# DATABASE MODELS

---

## Location

```ts
id
latitude
longitude
address
geometry
createdAt
updatedAt
```

---

## Neighborhood

```ts
id
name
slug
geometry
population
scores
createdAt
updatedAt
```

---

## MapLayer

```ts
id
name
type
configuration
isEnabled
createdAt
updatedAt
```

---

## HeatmapSnapshot

```ts
id
type
configuration
generatedAt
```

---

# BACKEND MODULES

```txt
maps/
neighborhoods/
layers/
heatmaps/
geospatial/
```

---

# SERVICES

```ts
findNearbyReports()
searchLocation()
reverseGeocode()
generateHeatmap()
generateNeighborhoodScores()
findWithinRadius()
findWithinPolygon()
calculateDistances()
generateRiskZones()
getMapLayers()
```

---

# API ENDPOINTS

## Public

```txt
GET /api/v1/maps/search
GET /api/v1/maps/reverse-geocode
GET /api/v1/maps/layers
```

---

## Reports

```txt
GET /api/v1/maps/reports
GET /api/v1/maps/reports/nearby
GET /api/v1/maps/reports/radius
```

---

## Heatmaps

```txt
GET /api/v1/maps/heatmaps
GET /api/v1/maps/hotspots
```

---

## Neighborhoods

```txt
GET /api/v1/neighborhoods
GET /api/v1/neighborhoods/:id
GET /api/v1/neighborhoods/:id/scores
```

---

# PERFORMANCE REQUIREMENTS

Map Initial Load:
< 2 seconds

Search:
< 500ms

Nearby Queries:
< 1 second

Heatmaps:
< 2 seconds

Marker Rendering:
60 FPS target

---

# SECURITY

Never expose:

- Private user locations
- Exact coordinates of sensitive reports
- Internal municipality-only layers

Always:

Validate coordinates
Rate limit map APIs
Sanitize queries

---

# NON-GOALS

Do not:

- Build a full GIS platform
- Render millions of markers at once
- Introduce paid map providers
- Build 3D Digital Twin in MVP
- Store map tiles manually

---

# DEFINITION OF DONE

✅ Interactive map works

✅ Layers work

✅ Search works

✅ Filters work

✅ Clustering works

✅ Nearby reports work

✅ Heatmaps work

✅ Neighborhood scores work

✅ Prediction layers work

✅ Municipality operations map works

---

# FINAL VISION

The Map System should become the living, interactive representation of Tripoli, enabling citizens and municipalities to understand the city's condition geographically and eventually serving as the foundation for a full AI-powered Digital Twin of Tripoli.