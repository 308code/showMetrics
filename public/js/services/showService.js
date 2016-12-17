gmkShowMetricsApp.service('showService', function($http, $location) {
    var self = this;
    this.orderedSegments = [];

    this.calculateLength = function(segment) {
        if (!segment) {
            return '';
        }
        var diff = segment.end - segment.start;
        if (diff < 0)
            return 0;

        var temp = '' + diff;
        temp = temp.trim();
        var result = "";

        switch (temp.length) {
            case 0:
                result = '00000000';
                break;
            case 1:
                result = '0000000' + diff;
                break;
            case 2:
                result = '000000' + diff;
                break;
            case 3:
                result = '00000' + diff;
                break;
            case 4:
                result = '0000' + diff;
                break;
            case 5:
                result = '000' + diff;
                break;
            case 6:
                result = '00' + diff;
                break;
            case 7:
                result = '0' + diff;
                break;
            case 8:
                result = '' + diff;
                break;
            default:
                result = '00000000';
        }

        var ms = parseInt(result.charAt(6) + result.charAt(7));
        var sec = parseInt(result.charAt(4) + result.charAt(5));
        var min = parseInt(result.charAt(2) + result.charAt(3));
        var hour = parseInt(result.charAt(0) + result.charAt(1));

        if (ms >= 40) {
            sec += 1;
        }
        if (sec >= 60) {
            min += 1;
            sec = sec - 60;
        }
        if (min >= 60) {
            hour += 1;
            min = min - 60;
        }
        var secString = "";
        var minString = "";
        var hourString = "";

        if (sec === 0) {
            secString = '00';
        } else if (sec < 10) {
            secString = '0' + sec;
        } else {
            secString = '' + sec;
        }

        if (min === 0) {
            minString = "";
        } else if (min < 10) {
            minString = '0' + min;
        } else {
            minString = '' + min;
        }

        if (hour === 0) {
            hourString = "";
        } else if (hour < 10) {
            hourString = '0' + hour;
        } else {
            hourString = '' + hour;
        }

        if (hourString.length > 0) {
            result = hourString + ':' + minString + ':' + secString;
        } else if (minString.length > 0) {
            result = minString + ':' + secString;
        } else if (secString.length > 0) {
            result = ':' + secString;
        } else {
            result = ':00';
        }
        return result;
    };

    this.recalculatePositions = function(pos, action, type) {
        if (action === "Remove") {
            for (segment in self.data.tease) {
                if (self.data.tease[segment].position === pos) {
                    self.data.tease.splice(segment, 1);
                } else if (self.data.tease[segment].position > pos) {
                    self.data.tease[segment].position = self.data.tease[segment].position - 1;
                }
            }
            for (segment in self.data.open) {
                if (self.data.open[segment].position === pos) {
                    self.data.open.splice(segment, 1);
                } else if (self.data.open[segment].position > pos) {
                    self.data.open[segment].position = self.data.open[segment].position - 1;
                }
            }
            for (segment in self.data.intro) {
                if (self.data.intro[segment].position === pos) {
                    self.data.intro.splice(segment, 1);
                } else if (self.data.intro[segment].position > pos) {
                    self.data.intro[segment].position = self.data.intro[segment].position - 1;
                }
            }
            for (segment in self.data.message) {
                if (self.data.message[segment].position === pos) {
                    self.data.message.splice(segment, 1);
                } else if (self.data.message[segment].position > pos) {
                    self.data.message[segment].position = self.data.message[segment].position - 1;
                }
            }
            for (segment in self.data.product) {
                if (self.data.product[segment].position === pos) {
                    self.data.product.splice(segment, 1);
                } else if (self.data.product[segment].position > pos) {
                    self.data.product[segment].position = self.data.product[segment].position - 1;
                }
            }
            for (segment in self.data.middle) {
                if (self.data.middle[segment].position === pos) {
                    self.data.middle.splice(segment, 1);
                } else if (self.data.middle[segment].position > pos) {
                    self.data.middle[segment].position = self.data.middle[segment].position - 1;
                }
            }
            for (segment in self.data.interview) {
                if (self.data.interview[segment].position === pos) {
                    self.data.interview.splice(segment, 1);
                } else if (self.data.interview[segment].position > pos) {
                    self.data.interview[segment].position = self.data.interview[segment].position - 1;
                }
            }
            for (segment in self.data.close) {
                if (self.data.close[segment].position === pos) {
                    self.data.close.splice(segment, 1);
                } else if (self.data.close[segment].position > pos) {
                    self.data.close[segment].position = self.data.close[segment].position - 1;
                }
            }
        } //if (action === "Remove")
        else if (action === "InsertBefore") {
            for (segment in self.data.tease) {
                if (self.data.tease[segment].position >= pos) {
                    self.data.tease[segment].position = self.data.tease[segment].position + 1;
                }
            }
            if (type === "tease") {
                var blankSegment = "{\"label\": \"tease\", " +
                    "\"position\": " + pos + ", \"start\": 0," +
                    " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                    " \"Details about shows tease section!\"}";
                self.data.tease.push(JSON.parse(blankSegment));
            }
            for (segment in self.data.open) {
                if (self.data.open[segment].position >= pos) {
                    self.data.open[segment].position = self.data.open[segment].position + 1;
                }
            }
            if (type === "open") {
                var blankSegment = "{\"label\": \"open\", " +
                    "\"position\": " + pos + ", \"start\": 0," +
                    " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                    " \"Details about shows open section!\"}";
                self.data.open.push(JSON.parse(blankSegment));
            }
            for (segment in self.data.intro) {
                if (self.data.intro[segment].position >= pos) {
                    self.data.intro[segment].position = self.data.intro[segment].position + 1;
                }
            }
            if (type === "intro") {
                var blankSegment = "{\"label\": \"intro\", " +
                    "\"position\": " + pos + ", \"start\": 0," +
                    " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                    " \"Details about shows intro section!\"}";
                self.data.intro.push(JSON.parse(blankSegment));
            }
            for (segment in self.data.message) {
                if (self.data.message[segment].position >= pos) {
                    self.data.message[segment].position = self.data.message[segment].position + 1;
                }
            }
            if (type === "message") {
                var blankSegment = "{\"label\": \"message\", \"position\": " +
                pos + ", \"part\":\"One\", \"date\": \"\", \"start\": 0," +
                    " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                    " \"Details about shows message section!\"}";
                self.data.message.push(JSON.parse(blankSegment));
            }
            for (segment in self.data.product) {
                if (self.data.product[segment].position >= pos) {
                    self.data.product[segment].position = self.data.product[segment].position + 1;
                }
            }
            if (type === "product") {
                var blankSegment = "{\"label\": \"product\", \"position\": " +
                pos + ", \"spot\":\"I think its the title!\", \"details\":" +
                    " \"Details about shows product section!\"}";
                self.data.product.push(JSON.parse(blankSegment));
            }
            for (segment in self.data.middle) {
                if (self.data.middle[segment].position >= pos) {
                    self.data.middle[segment].position = self.data.middle[segment].position + 1;
                }
            }
            if (type === "middle") {
                var blankSegment = "{\"label\": \"middle\", " +
                    "\"position\": " + pos + ", \"start\": 0," +
                    " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                    " \"Details about shows middle section!\"}";
                self.data.middle.push(JSON.parse(blankSegment));
            }
            for (segment in self.data.interview) {
                if (self.data.interview[segment].position >= pos) {
                    self.data.interview[segment].position = self.data.interview[segment].position + 1;
                }
            }
            if (type === "interview") {
                var blankSegment = "{\"label\": \"interview\", " +
                    "\"position\": " + pos + ", \"part\": \"One\", \"start\": 0," +
                    " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                    " \"Details about shows interview section!\"}";
                self.data.interview.push(JSON.parse(blankSegment));
            }
            for (segment in self.data.close) {
                if (self.data.close[segment].position >= pos) {
                    self.data.close[segment].position = self.data.close[segment].position + 1;
                }
            }
            if (type === "close") {
                var blankSegment = "{\"label\": \"close\", " +
                    "\"position\": " + pos + ", \"start\": 0," +
                    " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                    " \"Details about shows close section!\"}";
                self.data.close.push(JSON.parse(blankSegment));
            }
        } //else if (action === "InsertBefore")
        else if(action === "InsertAfter"){
          for (segment in self.data.tease) {
              if (self.data.tease[segment].position > pos) {
                  self.data.tease[segment].position = self.data.tease[segment].position + 1;
              }
          }
          if (type === "tease") {
              var blankSegment = "{\"label\": \"tease\", " +
                  "\"position\": " + (pos + 1) + ", \"start\": 0," +
                  " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                  " \"Details about shows tease section!\"}";
              self.data.tease.push(JSON.parse(blankSegment));
          }
          for (segment in self.data.open) {
              if (self.data.open[segment].position > pos) {
                  self.data.open[segment].position = self.data.open[segment].position + 1;
              }
          }
          if (type === "open") {
              var blankSegment = "{\"label\": \"open\", " +
                  "\"position\": " + (pos + 1) + ", \"start\": 0," +
                  " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                  " \"Details about shows open section!\"}";
              self.data.open.push(JSON.parse(blankSegment));
          }
          for (segment in self.data.intro) {
              if (self.data.intro[segment].position > pos) {
                  self.data.intro[segment].position = self.data.intro[segment].position + 1;
              }
          }
          if (type === "intro") {
              var blankSegment = "{\"label\": \"intro\", " +
                  "\"position\": " +(pos + 1) + ", \"start\": 0," +
                  " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                  " \"Details about shows intro section!\"}";
              self.data.intro.push(JSON.parse(blankSegment));
          }
          for (segment in self.data.message) {
              if (self.data.message[segment].position > pos) {
                  self.data.message[segment].position = self.data.message[segment].position + 1;
              }
          }
          if (type === "message") {
              var blankSegment = "{\"label\": \"message\", \"position\": " +
              (pos + 1) + ", \"part\":\"One\", \"date\": \"\", \"start\": 0," +
                  " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                  " \"Details about shows message section!\"}";
              self.data.message.push(JSON.parse(blankSegment));
          }
          for (segment in self.data.product) {
              if (self.data.product[segment].position > pos) {
                  self.data.product[segment].position = self.data.product[segment].position + 1;
              }
          }
          if (type === "product") {
              var blankSegment = "{\"label\": \"product\", \"position\": " +
              (pos + 1) + ", \"spot\":\"I think its the title!\", \"details\":" +
                  " \"Details about shows product section!\"}";
              self.data.product.push(JSON.parse(blankSegment));
          }
          for (segment in self.data.middle) {
              if (self.data.middle[segment].position > pos) {
                  self.data.middle[segment].position = self.data.middle[segment].position + 1;
              }
          }
          if (type === "middle") {
              var blankSegment = "{\"label\": \"middle\", " +
                  "\"position\": " + (pos + 1) + ", \"start\": 0," +
                  " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                  " \"Details about shows middle section!\"}";
              self.data.middle.push(JSON.parse(blankSegment));
          }
          for (segment in self.data.interview) {
              if (self.data.interview[segment].position > pos) {
                  self.data.interview[segment].position = self.data.interview[segment].position + 1;
              }
          }
          if (type === "interview") {
              var blankSegment = "{\"label\": \"interview\", " +
                  "\"position\": " + (pos + 1) + ", \"part\": \"One\", \"start\": 0," +
                  " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                  " \"Details about shows interview section!\"}";
              self.data.interview.push(JSON.parse(blankSegment));
          }
          for (segment in self.data.close) {
              if (self.data.close[segment].position > pos) {
                  self.data.close[segment].position = self.data.close[segment].position + 1;
              }
          }
          if (type === "close") {
              var blankSegment = "{\"label\": \"close\", " +
                  "\"position\": " + (pos + 1) + ", \"start\": 0," +
                  " \"end\": 0, \"filename\": \"This is filename\", \"details\":" +
                  " \"Details about shows close section!\"}";
              self.data.close.push(JSON.parse(blankSegment));
          }
        }//else if (action === "InsertAfter")
    };

    this.orderSegments = function(data) {
        self.orderedSegments.length = 0;
        self.orderedSegments = new Array(data.tease.length + data.open.length +
            data.intro.length + data.message.length + data.product.length +
            data.middle.length + data.interview.length + data.close.length);
        for (segment in data.tease) {
            self.orderedSegments[data.tease[segment].position - 1] = data.tease[segment];
        }
        for (segment in data.open) {
            self.orderedSegments[data.open[segment].position - 1] = data.open[segment];
            //self.orderedSegments.splice(data.open[segment].position - 1, 0, data.open[segment]);
        }
        for (segment in data.intro) {
            self.orderedSegments[data.intro[segment].position - 1] = data.intro[segment];
            //self.orderedSegments.splice(data.intro[segment].position - 1, 0, data.intro[segment]);
        }
        for (segment in data.message) {
            self.orderedSegments[data.message[segment].position - 1] = data.message[segment];
            //self.orderedSegments.splice(data.message[segment].position - 1, 0, data.message[segment]);
        }
        for (segment in data.product) {
            self.orderedSegments[data.product[segment].position - 1] = data.product[segment];
            //self.orderedSegments.splice(data.product[segment].position - 1, 0, data.product[segment]);
        }
        for (segment in data.middle) {
            self.orderedSegments[data.middle[segment].position - 1] = data.middle[segment];
            //self.orderedSegments.splice(data.middle[segment].position - 1, 0, data.middle[segment]);
        }
        for (segment in data.interview) {
            self.orderedSegments[data.interview[segment].position - 1] = data.interview[segment];
            //self.orderedSegments.splice(data.interview[segment].position - 1, 0, data.interview[segment]);
        }
        for (segment in data.close) {
            self.orderedSegments[data.close[segment].position - 1] = data.close[segment];
            //self.orderedSegments.splice(data.close[segment].position - 1, 0, data.close[segment]);
        }
    };

    this.getShow = function(id) {
        $http({
                method: 'GET',
                url: '/api/show/' + id,
                type: 'application/json'
            })
            .then(function(response) {
                self.data = response.data;
                self.orderSegments(response.data);
            }, function(response) {
                $log.error('Error in the getShow(id) service.\n\n' + response);
            });
        return self;
    };

    this.updateShow = function(){
      $http({
              method: 'POST',
              url: '/api/show',
              type: 'application/json',
              data: self.data
          })
          .then(function(response) {
              self.getShows();
          }, function(response) {
              $log.error('Error in the updateShow() service.\n\n' + response);
          });
      return self;
    };

    this.getShows = function() {
        $http({
                method: 'GET',
                url: '/api/shows',
                type: 'application/json'
            })
            .then(function(response) {
                self.data = response.data;
            }, function(response) {
                $log.error('Error in the getShows() service.\n\n' + response);
            });
        return self;
    };

    this.copyShow = function(id) {
        $http({
                method: 'POST',
                url: '/api/show/copy/' + id,
                type: 'application/json'
            })
            .then(function(response) {
                self.data = response.data;
            }, function(response) {
                $log.info(response);
            });
        return self;
    };

    this.deleteShow = function(id) {
        $http({
                method: 'DELETE',
                url: '/api/show/delete/' + id,
                type: 'application/json'
            })
            .then(function(response) {
                self.data = response.data;
            }, function(response) {
                $log.info(response);
            });
    }
    return self;
});
