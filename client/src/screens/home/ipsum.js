import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import Text from 'components/text'

const Wrapper = styled.div`
  max-width: 40em;
  margin: 1em;
`

const Ipsum = props => {
  return (
    <Wrapper>
      <Header text={'Lacinia primis'} />
      <br />
      <Text>
        Duis sodales elit facilisi cubilia blandit, habitasse netus est! Libero platea dui, scelerisque non. Facilisi augue eget tempus eleifend potenti odio mollis nibh cubilia. Est semper mollis tempor nec vivamus pharetra rhoncus ornare magnis facilisis. Primis sociosqu curae; dolor tempor per suscipit nisl. Consectetur mauris tellus sed vitae urna magnis habitasse bibendum ad! Hendrerit vulputate iaculis.
      </Text>
      <hr />
      <Text>
        Accumsan vel turpis porta integer nullam phasellus, himenaeos class leo augue pellentesque. Platea sollicitudin senectus massa venenatis consequat consectetur. Mattis morbi metus auctor eros aliquam sodales. Duis augue placerat non vivamus? Suspendisse urna mauris etiam tempus maecenas semper curae; neque. Leo interdum pharetra nisl curae; parturient. Tellus ut commodo dictum venenatis. Laoreet mattis magnis auctor lobortis hendrerit laoreet eleifend netus massa. Ut id rhoncus ridiculus montes ultricies massa tempor. Ut pellentesque quisque fermentum. Varius nec cursus adipiscing mi sociis libero pellentesque diam neque bibendum. Semper semper eros magnis massa urna velit sapien. Vehicula orci lorem!
      </Text>
      <br />
      <Text>
        Penatibus quis etiam accumsan felis ut condimentum pharetra sodales libero ornare feugiat. Venenatis elementum pharetra augue imperdiet erat erat turpis. Ridiculus ullamcorper urna sociis congue semper ultricies ligula consequat semper hac. Gravida potenti volutpat dui nullam imperdiet ipsum duis sed nulla magna vehicula facilisis. Egestas, parturient tristique tempor nulla primis nulla. Cubilia, sem tempus ullamcorper. Cum fermentum ligula duis lectus. Adipiscing sagittis dis nisl non facilisi pharetra commodo posuere dolor elit purus. Hendrerit.
      </Text>
      <br />
      <Text>
        Platea ullamcorper vivamus lobortis ipsum bibendum curabitur mattis lectus lorem eros mi ridiculus. Nostra rhoncus congue nisi lobortis habitasse sodales interdum maecenas sit et diam. Cras ut est habitant tempus euismod aliquam in nulla nostra commodo faucibus duis. Ornare enim himenaeos; diam facilisis mi dapibus. In vel inceptos molestie aliquam sed faucibus pretium. Id auctor semper donec rhoncus sapien dictum. Montes nec aliquet orci a. Felis sodales curabitur nascetur torquent integer, imperdiet torquent maecenas. Volutpat vitae sem consectetur gravida ridiculus turpis. Semper natoque auctor vivamus?
      </Text>
      <br />
      <Text>
        Lacinia primis iaculis placerat vel libero. Quis est et rutrum primis metus eros accumsan per. Urna consectetur ridiculus vivamus hac sit montes nam. Litora ullamcorper consectetur feugiat facilisis aenean nulla metus sit dui vitae tempus. Magnis consequat tempus natoque quam suscipit. Tincidunt tellus felis, phasellus conubia dui. Interdum et tortor hendrerit ligula nostra montes velit.
      </Text>
    </Wrapper>
  )
}

export default Ipsum
