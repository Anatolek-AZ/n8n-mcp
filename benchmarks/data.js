window.BENCHMARK_DATA = {
  "lastUpdate": 1754047358597,
  "repoUrl": "https://github.com/Anatolek-AZ/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23327f5dc72270cf77cd87779779fdd237c7a15c",
          "message": "Merge pull request #106 from czlonkowski/fix/docker-config-file-support\n\nfix: add Docker configuration file support (fixes #105)",
          "timestamp": "2025-07-31T18:07:48+02:00",
          "tree_id": "ee973173090c4b224f364e2e1f313c9c23d7bf89",
          "url": "https://github.com/Anatolek-AZ/n8n-mcp/commit/23327f5dc72270cf77cd87779779fdd237c7a15c"
        },
        "date": 1754047358152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0188,
            "unit": "ms",
            "range": 0.4108,
            "extra": "53143 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1696,
            "unit": "ms",
            "range": 0.5446,
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.005,
            "unit": "ms",
            "range": 0.32530000000000003,
            "extra": "199090 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0683,
            "unit": "ms",
            "range": 0.387,
            "extra": "14652 ops/sec"
          }
        ]
      }
    ]
  }
}