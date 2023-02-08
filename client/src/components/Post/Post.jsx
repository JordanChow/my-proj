import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiAccountCircleFill } from "react-icons/ri";

import {
  Card,
  CardBody,
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
  HStack,
  Spacer,
  Icon,
  Link,
  Avatar,
} from "@chakra-ui/react";

// TODO: read in props from backend
const Post = ({ id, title, author, imageUrl }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {};

  return (
    <LinkBox>
      <Card onClick={handleClick}>
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Business Image"
            borderRadius="md"
          />
          <HStack mt="4">
            {/* TODO: add postId */}
            <LinkOverlay href="/post/:postId">
              <Text fontSize="md">Stoney's Bread Company</Text>
            </LinkOverlay>
            <Spacer />
            {/* TODO: route to author profile */}
            <HStack
              as={Link}
              href="https://chakra-ui.com/docs/components/link-overlay/usage"
            >
              {/* TODO: use posters name */}
              <Text fontSize="sm">Jordan Chow</Text>
              {/* TODO: use posters name and image */}
              <Avatar name="Jordan Chow" src="" size="xs" />
            </HStack>
          </HStack>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default Post;
