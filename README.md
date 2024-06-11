# Flight Path Tracker API

## Overview
This microservice API helps track a person's flight path by sorting unordered flight segments to determine the total flight path from start to end.

## Endpoint

### POST /calculate

**Request:**
- Content-Type: application/json
- Body: An array of flight segments where each segment is an array with a source and destination airport code.

**Example Request:**
```json
[
    ["SFO", "EWR"],
    ["ATL", "EWR"],
    ["SFO", "ATL"]
]
