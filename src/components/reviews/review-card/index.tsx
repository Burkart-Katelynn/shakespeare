import { FunctionComponent } from "react";
import { Avatar, Card, Comment, Rate, Tooltip } from "antd";
import moment from "moment";
import "./index.cssmodule.scss";

interface Props {
  id: number;
  publish_date: Date;
  author: string;
  rating: number;
  body: string;
}

const ReviewCard: FunctionComponent<Props> = (props) => {
  const renderBody = () => {
    return (
      <div>
        <p>
          <Rate disabled allowHalf defaultValue={props.rating} />
        </p>
        <p className="body">{props.body}</p>
      </div>
    );
  };
  return (
    <div className="review">
      <Card>
        <Comment
          className="comment"
          author={props.author}
          avatar={
            <Avatar
              className="avatar"
              src="https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg"
              alt="Shakespeare"
            />
          }
          content={renderBody()}
          datetime={
            <Tooltip
              title={moment(props.publish_date).format("YYYY-MM-DD HH:mm:ss")}
            >
              <span>{moment(props.publish_date).fromNow()}</span>
            </Tooltip>
          }
        />
      </Card>
    </div>
  );
};

export default ReviewCard;
