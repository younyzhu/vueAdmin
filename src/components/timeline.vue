<template>
  <ul class="timeline">
    <!-- timeline time label -->
    <li class="time-label">
                  <span class="bg-red">
                    10 Feb. 2014
                  </span>
    </li>
    <!-- /.timeline-label -->
    <!-- timeline item -->
    <li>
      <i class="fa fa-envelope bg-blue"></i>

      <div class="timeline-item">
        <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>

        <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

        <div class="timeline-body">
          Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
          weebly ning heekya handango imeem plugg dopplr jibjab, movity
          jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
          quora plaxo ideeli hulu weebly balihoo...
        </div>
        <div class="timeline-footer">
          <a class="btn btn-primary btn-xs">Read more</a>
          <a class="btn btn-danger btn-xs">Delete</a>
        </div>
      </div>
    </li>
    <!-- END timeline item -->
    <!-- timeline item -->
    <li>
      <i class="fa fa-user bg-aqua"></i>

      <div class="timeline-item">
        <span class="time"><i class="fa fa-clock-o"></i> 5 mins ago</span>

        <h3 class="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request</h3>
      </div>
    </li>
    <!-- END timeline item -->
    <!-- timeline item -->
    <li>
      <i class="fa fa-comments bg-yellow"></i>

      <div class="timeline-item">
        <span class="time"><i class="fa fa-clock-o"></i> 27 mins ago</span>

        <h3 class="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

        <div class="timeline-body">
          Take me to your leader!
          Switzerland is small and neutral!
          We are more like Germany, ambitious and misunderstood!
        </div>
        <div class="timeline-footer">
          <a class="btn btn-warning btn-flat btn-xs">View comment</a>
        </div>
      </div>
    </li>
    <!-- END timeline item -->
    <!-- timeline time label -->
    <li class="time-label">
                  <span class="bg-green">
                    3 Jan. 2014
                  </span>
    </li>
    <!-- /.timeline-label -->
    <!-- timeline item -->
    <li>
      <i class="fa fa-camera bg-purple"></i>

      <div class="timeline-item">
        <span class="time"><i class="fa fa-clock-o"></i> 2 days ago</span>

        <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

        <div class="timeline-body">
          <img src="http://placehold.it/150x100" alt="..." class="margin">
          <img src="http://placehold.it/150x100" alt="..." class="margin">
          <img src="http://placehold.it/150x100" alt="..." class="margin">
          <img src="http://placehold.it/150x100" alt="..." class="margin">
        </div>
      </div>
    </li>
    <!-- END timeline item -->
    <!-- timeline item -->
    <li>
      <i class="fa fa-video-camera bg-maroon"></i>

      <div class="timeline-item">
        <span class="time"><i class="fa fa-clock-o"></i> 5 days ago</span>

        <h3 class="timeline-header"><a href="#">Mr. Doe</a> shared a video</h3>

        <div class="timeline-body">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tMWkeBIohBs" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="timeline-footer">
          <a href="#" class="btn btn-xs bg-maroon">See comments</a>
        </div>
      </div>
    </li>
    <!-- END timeline item -->
    <li>
      <i class="fa fa-clock-o bg-gray"></i>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: 'primary',
      required: true,
    },
    hasborder: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    boxstatus() {
      return `box box-${this.status}`;
    },
    headerClass() {
      let str = '';
      if (this.hasborder) {
        str = 'with-border';
      }
      return `box-header ${str}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*
 * Component: Timeline
 * -------------------
 */
  .timeline {
    position: relative;
    margin: 0 0 30px 0;
    padding: 0;
    list-style: none;
  }
  .timeline:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #ddd;
    left: 31px;
    margin: 0;
    border-radius: 2px;
  }
  .timeline > li {
    position: relative;
    margin-right: 10px;
    margin-bottom: 15px;
  }
  .timeline > li:before,
  .timeline > li:after {
    content: " ";
    display: table;
  }
  .timeline > li:after {
    clear: both;
  }
  .timeline > li > .timeline-item {
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-top: 0;
    background: #fff;
    color: #444;
    margin-left: 60px;
    margin-right: 15px;
    padding: 0;
    position: relative;
  }
  .timeline > li > .timeline-item > .time {
    color: #999;
    float: right;
    padding: 10px;
    font-size: 12px;
  }
  .timeline > li > .timeline-item > .timeline-header {
    margin: 0;
    color: #555;
    border-bottom: 1px solid #f4f4f4;
    padding: 10px;
    font-size: 16px;
    line-height: 1.1;
  }
  .timeline > li > .timeline-item > .timeline-header > a {
    font-weight: 600;
  }
  .timeline > li > .timeline-item > .timeline-body,
  .timeline > li > .timeline-item > .timeline-footer {
    padding: 10px;
  }
  .timeline > li > .fa,
  .timeline > li > .glyphicon,
  .timeline > li > .ion {
    width: 30px;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    position: absolute;
    color: #666;
    background: #d2d6de;
    border-radius: 50%;
    text-align: center;
    left: 18px;
    top: 0;
  }
  .timeline > .time-label > span {
    font-weight: 600;
    padding: 5px;
    display: inline-block;
    background-color: #fff;
    border-radius: 4px;
  }
  .timeline-inverse > li > .timeline-item {
    background: #f0f0f0;
    border: 1px solid #ddd;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .timeline-inverse > li > .timeline-item > .timeline-header {
    border-bottom-color: #ddd;
  }
</style>
