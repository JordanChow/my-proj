import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {};

  return (
    <Card onClick={handleClick}>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
  );
};

export default Post;
