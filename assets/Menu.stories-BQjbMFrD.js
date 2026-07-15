import{j as e}from"./jsx-runtime-DL0a8zbO.js";import{r as i}from"./iframe-BVj2ick4.js";import{M as C,N as I}from"./NestedMenu-BgE6Bknn.js";import{B as b}from"./Button-CXI3QB7B.js";import{I as y}from"./IconArrowDownloadFilled-B16BV52z.js";import{I as g,a as h,b as x}from"./IconBeach-VpezsIwA.js";import{I as M}from"./IconMore-uCnrmigN.js";import{I as O}from"./IconCheckmark-D8ZpFlk5.js";import{I as n}from"./IconSettings-hLAfzDlx.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-rFaVHm7H.js";import"./index-k9maOmz4.js";import"./Text-CxAVKHxY.js";import"./helpers-DYfCdv0W.js";import"./index-AboGxAif.js";import"./types-CnM4o-t9.js";import"./index-8IOBBxJR.js";import"./Popover-Dkg9qnLC.js";import"./IconDismiss-CQacfO5o.js";import"./Link--Pj_5I4n.js";import"./CollapseGroup-BTrc22wY.js";import"./Divider-BvXFWtpK.js";import"./AnimatePresenceWrapper-DmUsMaMs.js";import"./IconChevronDown-STgH7U-s.js";import"./IconChevronUp-CIv_8_W6.js";import"./IconChevronRight-D0D74f6-.js";import"./AvatarGroup-5UodMljO.js";import"./DropzoneFileUpload-B_Bp1oqV.js";import"./Label-CpUk_1OC.js";import"./useFormProps-CY41BHQ6.js";import"./ErrorMessage-bkzzL1F8.js";import"./IconDynamicComponent-gkrEy0R9.js";import"./Snackbar-Cyql0W9K.js";import"./Alert-BZo8PGNq.js";import"./IconDismissFilled-Bx0dGW5U.js";import"./Progress-CUJElxYR.js";import"./IconAdd-DdeK5DOJ.js";import"./Checkbox-DljK-lQ9.js";import"./IconInfo-FRTELuNe.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
