import{j as e}from"./jsx-runtime-DL0a8zbO.js";import{r as c}from"./iframe-BVj2ick4.js";import{a as k,b as N,c as z,d as $,M as _}from"./Popover-Dkg9qnLC.js";import{c as b}from"./index-k9maOmz4.js";import"./types-CnM4o-t9.js";import{B as x}from"./Button-CXI3QB7B.js";import{T as f}from"./Text-CxAVKHxY.js";import{r as A}from"./Tooltip-rFaVHm7H.js";import{a as D}from"./IconArrowDownloadFilled-B16BV52z.js";import{S as B}from"./index-qQUpfBcz.js";import{I as R}from"./IconOpen-jX9jTNr1.js";import{S as w}from"./Status-vrOcbktK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-CQacfO5o.js";import"./helpers-DYfCdv0W.js";import"./Link--Pj_5I4n.js";import"./index-8IOBBxJR.js";import"./NestedMenu-BgE6Bknn.js";import"./CollapseGroup-BTrc22wY.js";import"./Divider-BvXFWtpK.js";import"./AnimatePresenceWrapper-DmUsMaMs.js";import"./IconChevronDown-STgH7U-s.js";import"./IconChevronUp-CIv_8_W6.js";import"./IconChevronRight-D0D74f6-.js";import"./AvatarGroup-5UodMljO.js";import"./DropzoneFileUpload-B_Bp1oqV.js";import"./Label-CpUk_1OC.js";import"./useFormProps-CY41BHQ6.js";import"./ErrorMessage-bkzzL1F8.js";import"./IconDynamicComponent-gkrEy0R9.js";import"./Snackbar-Cyql0W9K.js";import"./Alert-BZo8PGNq.js";import"./IconDismissFilled-Bx0dGW5U.js";import"./Progress-CUJElxYR.js";import"./IconAdd-DdeK5DOJ.js";import"./Checkbox-DljK-lQ9.js";import"./IconInfo-FRTELuNe.js";import"./IconCheckmark-D8ZpFlk5.js";import"./Empty-Cz0wNMn7.js";import"./Image-MZNZ2Ali.js";import"./Input-WA5Bu-7Y.js";import"./IconCheckmarkCircleFilled-Dxm7-3Mz.js";import"./IconChevronLeft-OZxclYpb.js";import"./IconCaretDownFilled-BcjIUC4O.js";import"./extends-CF3RwP-h.js";import"./Tab-CDV0bC-K.js";import"./Badge-DTjEJA6u.js";import"./IconMore-uCnrmigN.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:T="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return N(v,n,O&&t,c.useId()),z(t),$(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${T}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},we={title:"Modal",component:_,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(_,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} headerIcon={<IconOpen />} headerStatus={<Status type="danger" text="Rejected" size="small" withBackground />} buttonProps={{
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
}`,...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var g,j,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const Ee=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,Ee as __namedExportsOrder,we as default};
