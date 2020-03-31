let array = [1, 2, 3, 4, 5, 6];
let stream = [7, 8, 9, 1];

const resultArray = new Set([...array, ...stream])
console.log("Result Array : ", [...resultArray]);


//* https://medium.com/@iqbal.abuniyaz/penggunaan-fungsi-set-pada-javascript-260ffe448535

//* https://javascript.info/map-set

//* https://javascript.info

//* https://www.freecodecamp.org/news/master-the-art-of-looping-in-javascript-with-these-incredible-tricks-a5da1aa1d6c5/


[
    {
      id: '8587e17c-d4be-4795-9db0-649abcaf0787',
      parent_id: null,
      prev_sibling_id: null,
      next_sibling_id: null,
      code: 'P0001',
      member_id: null,
      member_first_name: null,
      member_last_name: null,
      structure_unit_type_id: null,
      structure_unit_type_name: null,
      structure_unit_id: null,
      structure_unit_name: null,
      structure_position_title_id: '6bd4ce14-6d71-4fd2-90f5-21e100314ded',
      structure_position_title_name: 'Founder',
      classification_id: 5,
      classification_name: 'top leader',
      node_level: 0,
      created_by: '51a6c9d1-3f85-4439-b3c8-9ca653e22813',
      updated_by: null,
      deleted_by: null,
      created_at: '2019-11-06 14:40:30',
      updated_at: '2019-11-06 14:40:30',
      deleted_at: null,
      descendant_count: 3,
      classification: {
        id: '5',
        code: 'structure_position_classification_id_top_leader',
        name: 'top leader',
        sort_order: 0,
        self: null
      },
      self: {
        url: 'human-resource/structure-position/8587e17c-d4be-4795-9db0-649abcaf0787',
        rel: {
          masterStructurePositionTitle: 'human-resource/master-structure-position-title/6bd4ce14-6d71-4fd2-90f5-21e100314ded',
          masterStructureUnitType: null,
          masterStructureUnit: null
        }
      }
    },
    {
      id: '38af968b-77ee-434a-8c75-2e1584a2a5cd',
      parent_id: '8587e17c-d4be-4795-9db0-649abcaf0787',
      prev_sibling_id: null,
      next_sibling_id: null,
      code: 'P0006',
      member_id: 'fd3f9b0c-2ad4-4c7f-8065-164b3e293e21',
      member_first_name: 'Doel',
      member_last_name: 'Rachman',
      structure_unit_type_id: 'ad5d951a-de29-4af1-aff8-f6ee0b1f4fbf',
      structure_unit_type_name: 'Divisi',
      structure_unit_id: 'c48d4c29-5681-40de-8be7-d703d95b43d6',
      structure_unit_name: 'IT',
      structure_position_title_id: '3d2c6925-415b-4fee-bb57-a4bb3d34d933',
      structure_position_title_name: 'Front End Developer',
      classification_id: 1,
      classification_name: 'head',
      node_level: 1,
      created_by: '51a6c9d1-3f85-4439-b3c8-9ca653e22813',
      updated_by: null,
      deleted_by: null,
      created_at: '2019-11-06 17:44:35',
      updated_at: '2019-11-06 17:44:35',
      deleted_at: null,
      descendant_count: 0,
      classification: {
        id: '1',
        code: 'structure_position_classification_id_head',
        name: 'head',
        sort_order: 1,
        self: null
      },
      self: {
        url: 'human-resource/structure-position/38af968b-77ee-434a-8c75-2e1584a2a5cd',
        rel: {
          masterStructurePositionTitle: 'human-resource/master-structure-position-title/3d2c6925-415b-4fee-bb57-a4bb3d34d933',
          masterStructureUnitType: 'human-resource/master-structure-unit-type/ad5d951a-de29-4af1-aff8-f6ee0b1f4fbf',
          masterStructureUnit: 'human-resource/master-structure-unit/c48d4c29-5681-40de-8be7-d703d95b43d6'
        }
      }
    },
    {
      id: '2eff95b1-74f4-4b54-b710-9a526428a4af',
      parent_id: '8587e17c-d4be-4795-9db0-649abcaf0787',
      prev_sibling_id: null,
      next_sibling_id: null,
      code: 'P0007',
      member_id: null,
      member_first_name: null,
      member_last_name: null,
      structure_unit_type_id: 'ad5d951a-de29-4af1-aff8-f6ee0b1f4fbf',
      structure_unit_type_name: 'Divisi',
      structure_unit_id: 'f5b97c68-8f18-451a-adc5-cb36d6e6c6f7',
      structure_unit_name: 'Finance',
      structure_position_title_id: '171b7ca4-0d73-443c-8242-382756dbbe41',
      structure_position_title_name: 'Finance Manager',
      classification_id: 1,
      classification_name: 'head',
      node_level: 1,
      created_by: '51a6c9d1-3f85-4439-b3c8-9ca653e22813',
      updated_by: null,
      deleted_by: null,
      created_at: '2019-11-07 09:05:26',
      updated_at: '2019-11-07 09:05:26',
      deleted_at: null,
      descendant_count: 0,
      classification: {
        id: '1',
        code: 'structure_position_classification_id_head',
        name: 'head',
        sort_order: 1,
        self: null
      },
      self: {
        url: 'human-resource/structure-position/2eff95b1-74f4-4b54-b710-9a526428a4af',
        rel: {
          masterStructurePositionTitle: 'human-resource/master-structure-position-title/171b7ca4-0d73-443c-8242-382756dbbe41',
          masterStructureUnitType: 'human-resource/master-structure-unit-type/ad5d951a-de29-4af1-aff8-f6ee0b1f4fbf',
          masterStructureUnit: 'human-resource/master-structure-unit/f5b97c68-8f18-451a-adc5-cb36d6e6c6f7'
        }
      }
    },
    {
      id: '15fe2b36-67bd-408a-ae8f-fb45f6838667',
      parent_id: '8587e17c-d4be-4795-9db0-649abcaf0787',
      prev_sibling_id: null,
      next_sibling_id: null,
      code: 'P0008',
      member_id: null,
      member_first_name: null,
      member_last_name: null,
      structure_unit_type_id: 'ad5d951a-de29-4af1-aff8-f6ee0b1f4fbf',
      structure_unit_type_name: 'Divisi',
      structure_unit_id: 'a60c98b6-d964-44a6-82f0-88044d8e7cf4',
      structure_unit_name: 'HR',
      structure_position_title_id: '86079ffd-e781-42f0-ad5e-32632c8ce557',
      structure_position_title_name: 'HR Manager',
      classification_id: 1,
      classification_name: 'head',
      node_level: 1,
      created_by: '51a6c9d1-3f85-4439-b3c8-9ca653e22813',
      updated_by: null,
      deleted_by: null,
      created_at: '2019-11-07 09:05:59',
      updated_at: '2019-11-07 09:05:59',
      deleted_at: null,
      descendant_count: 0,
      classification: {
        id: '1',
        code: 'structure_position_classification_id_head',
        name: 'head',
        sort_order: 1,
        self: null
      },
      self: {
        url: 'human-resource/structure-position/15fe2b36-67bd-408a-ae8f-fb45f6838667',
        rel: {
          masterStructurePositionTitle: 'human-resource/master-structure-position-title/86079ffd-e781-42f0-ad5e-32632c8ce557',
          masterStructureUnitType: 'human-resource/master-structure-unit-type/ad5d951a-de29-4af1-aff8-f6ee0b1f4fbf',
          masterStructureUnit: 'human-resource/master-structure-unit/a60c98b6-d964-44a6-82f0-88044d8e7cf4'
        }
      }
    }
  ]