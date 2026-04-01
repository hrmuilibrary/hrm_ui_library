import{j as o}from"./jsx-runtime-DhhSRmUj.js";import{r as b}from"./iframe-XWSxHUYp.js";import{M,a as f}from"./Popover-BBpeuzf3.js";import{a as x}from"./IconArrowDownloadFilled-4XJgZsA6.js";import{S as T}from"./index-Cmap_7tX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-CPmHIjO7.js";import"./types-DDH93KLr.js";import"./helpers-DywMQWg2.js";import"./IconDismiss-DdXA4tYu.js";import"./Tooltip-DXc3Ti7K.js";import"./Text-B0Ompgmd.js";import"./Button-BhSoGOsT.js";import"./Link-CiAD8QoA.js";import"./NestedMenu-D1lcvWmL.js";import"./index-DVxRUtCn.js";import"./CollapseGroup-BC7gA-_N.js";import"./Divider-anqlekOx.js";import"./AnimatePresenceWrapper-CZp9evis.js";import"./IconChevronDown-CXcT1Rfn.js";import"./IconChevronUp-Co-48cyh.js";import"./IconChevronRight-C3yFcdsG.js";import"./AvatarGroup-jP1dEtFv.js";import"./DropzoneFileUpload-DAREOwY-.js";import"./Label-CpoAPXCB.js";import"./useFormProps-Dt2i-gjP.js";import"./ErrorMessage-DLc7yXeL.js";import"./IconDynamicComponent-BkazmEr3.js";import"./Snackbar-L4YQeee4.js";import"./Alert-DCpYfA-P.js";import"./IconDismissFilled-DZGKPyvP.js";import"./Progress-BH4yO1mP.js";import"./IconAdd-CqerbPmL.js";import"./Checkbox-CndSihGO.js";import"./IconInfo-BB8HdVc0.js";import"./IconCheckmark-C73epyu7.js";import"./Empty-Ddhzlrw2.js";import"./Image-Gmcjryif.js";import"./Input-CHKY6vmF.js";import"./IconCheckmarkCircleFilled-STBYraMR.js";import"./IconChevronLeft-21NDq6R4.js";import"./IconCaretDownFilled-XXXBhmw-.js";import"./extends-CF3RwP-h.js";import"./Tab-S8VOQBZa.js";import"./Badge-BEAq0I_9.js";import"./IconMore-Dn3i73UM.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const xo=["Modal","ModalConfirmation"];export{n as Modal,i as ModalConfirmation,xo as __namedExportsOrder,fo as default};
