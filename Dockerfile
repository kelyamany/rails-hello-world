FROM ruby:2.7.1
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y nodejs yarn
ENV INSTALL_PATH /rails-hello-world
RUN mkdir $INSTALL_PATH
WORKDIR $INSTALL_PATH
ADD Gemfile $INSTALL_PATH/
ADD Gemfile.lock $INSTALL_PATH/
RUN bundle install

COPY . $INSTALL_PATH/
RUN yarn install

